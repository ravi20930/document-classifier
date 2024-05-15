import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadFile, listPDFs, viewPDF } from "../api/user";

const PDFOcrPage = () => {
  const [files, setFiles] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleFileUpload = async (event) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles.length) return;

    const promises = [];
    for (const file of selectedFiles) {
      if (!file.name.endsWith(".pdf")) {
        setErrorMessage("Only PDF files are allowed.");
        return;
      }
      promises.push(uploadFile(file));
    }

    try {
      await Promise.all(promises);
      setErrorMessage(null);
      fetchPDFs();
      toast.success(`${selectedFiles.length} file(s) uploaded successfully!`);
    } catch (error) {
      console.error("Error uploading files:", error);
      setErrorMessage("An error occurred during upload.");
    }
  };

  const fetchPDFs = async () => {
    try {
      const data = await listPDFs();
      setFiles(data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      setErrorMessage("An error occurred while fetching PDFs.");
    }
  };

  const handleFileClick = async (folderName, fileName) => {
    try {
      const blobData = await viewPDF(folderName, fileName);
      setModalContent(blobData);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching PDF:", error);
      setErrorMessage("An error occurred while fetching the PDF.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  useEffect(() => {
    fetchPDFs();

    // Add event listener to close modal when clicked outside
    const handleOutsideClick = (event) => {
      if (showModal && !event.target.closest(".modal-content")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-4">Document Classifier</h1>
      <label
        htmlFor="pdfInput"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer mb-4"
      >
        Upload PDFs
      </label>
      <input
        id="pdfInput"
        type="file"
        accept=".pdf"
        multiple
        onChange={handleFileUpload}
        className="hidden"
      />
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      {Object.keys(files).length > 0 && (
        <table style={{ border: "1px solid #ddd", margin: "10px" }}>
          <thead>
            <tr>
              {Object.keys(files.pdf_files_by_folder).map(
                (folderName, index) => (
                  <th
                    key={index}
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      backgroundColor: `hsl(${180 + index * 30}, 80%, 90%)`,
                    }}
                  >
                    {folderName}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from(
              {
                length: Math.max(
                  ...Object.values(files.pdf_files_by_folder).map(
                    (files) => files.length
                  )
                ),
              },
              (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(files.pdf_files_by_folder).map(
                    (filesInFolder, columnIndex) => (
                      <td
                        key={columnIndex}
                        style={{
                          padding: "5px",
                          border: "1px solid #ddd",
                          backgroundColor:
                            rowIndex % 2 === 0 ? "#fff" : "#e0e0e0",
                        }}
                      >
                        {filesInFolder[rowIndex] && (
                          <div
                            className="truncate cursor-pointer"
                            style={{ width: "100px" }}
                            onClick={() =>
                              handleFileClick(
                                Object.keys(files.pdf_files_by_folder)[
                                  columnIndex
                                ],
                                filesInFolder[rowIndex]
                              )
                            }
                          >
                            {filesInFolder[rowIndex].length > 10
                              ? `${filesInFolder[rowIndex].substring(0, 10)}...`
                              : filesInFolder[rowIndex]}
                          </div>
                        )}
                      </td>
                    )
                  )}
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg p-8">
              <iframe
                src={URL.createObjectURL(modalContent)}
                frameBorder="0"
                width="800"
                height="600"
              ></iframe>
              <button
                className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PDFOcrPage;
