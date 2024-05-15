import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadFile, listPDFs } from "../api/user"; // Assuming these are your API endpoints

const PDFOcrPage = () => {
  const [files, setFiles] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFileUpload = async (event) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles.length) return; // Handle empty selection

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
      fetchPDFs(); // Refresh the list after successful uploads
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

  useEffect(() => {
    fetchPDFs(); // Fetch PDFs on initial render
  }, []);

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
                      backgroundColor: `hsl(${180 + index * 30}, 80%, 90%)`, // Generate light shades with hue variation
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
                            rowIndex % 2 === 0 ? "#fff" : "#e0e0e0", // Alternating row background colors
                        }}
                      >
                        {filesInFolder[rowIndex] && (
                          <div className="truncate" style={{ width: "100px" }}>
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
      <ToastContainer />
    </div>
  );
};

export default PDFOcrPage;
