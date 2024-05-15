import axios from "axios";

const uploadFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("files", file);

    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/upload", // Replace if needed
      headers: {
        "Content-Type": "multipart/form-data", // Set for PDF uploads
      },
      data: formData,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

const listPDFs = async () => {
  try {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/list-pdfs", // Replace if needed
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    throw error;
  }
};

const viewPDF = async (folder: string, filename: string) => {
  try {
    const config = {
      method: "get",
      url: `http://127.0.0.1:8000/download/${folder}/${filename}`,
      responseType: "blob",
    };

    const response = await axios.request(config);
    return new Blob([response.data], { type: "application/pdf" });
  } catch (error) {
    console.error("Error viewing PDF:", error);
    throw error;
  }
};

export { uploadFile, listPDFs, viewPDF };
