import React, { useState, useRef } from "react";
import Tesseract from "tesseract.js";
import Webcam from "react-webcam";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadImage } from "../api/user";

const OCRPage = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([
    "Personal & Lifestyle",
    "Work & Business",
    "Education & Learning",
    "Financial & Legal",
    "Health & Medical",
    "Travel & Leisure",
    "Entertainment & Media",
    "Utilities & Miscellaneous",
  ]);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const {
      data: { text },
    } = await Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    });
    setText(text);
    setCapturedImage(URL.createObjectURL(file));
  };

  const handleCaptureImage = async () => {
    const imageData = webcamRef.current.getScreenshot();
    const {
      data: { text },
    } = await Tesseract.recognize(imageData, "eng", {
      logger: (m) => console.log(m),
    });
    setText(text);
    setCapturedImage(imageData);
    setShowCamera(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSaveDocument = async () => {
    try {
      // Ensure an image is selected
      if (!capturedImage) {
        toast.error("Please capture or upload an image.");
        return;
      }

      // Call the image upload API
      await uploadImage(capturedImage);
      toast.success("Document saved successfully!");
      setCapturedImage(null);
    } catch (error) {
      toast.error("Error saving document");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-4">OCR Page</h1>
      <label
        htmlFor="imageInput"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer mb-4"
      >
        Upload Image
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <button
        onClick={() => setShowCamera(true)}
        className="bg-purple-500 text-white rounded-lg px-4 py-2 mb-4"
      >
        Capture Image
      </button>
      {showCamera && (
        <div className="mb-4">
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            width={320}
            height={240}
            ref={webcamRef}
          />
          <button
            onClick={handleCaptureImage}
            className="bg-purple-500 text-white rounded-lg px-4 py-2 mt-4"
          >
            Take Picture
          </button>
        </div>
      )}
      {text && (
        <div className="text-lg text-gray-700 mb-4">Extracted Text: {text}</div>
      )}
      {capturedImage && (
        <img
          src={capturedImage}
          alt="Captured"
          className="mb-4"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      )}
      <select
        value={category}
        onChange={handleCategoryChange}
        className="bg-gray-200 rounded-lg px-4 py-2 mb-4"
      >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        onClick={handleSaveDocument}
        className="bg-green-500 text-white rounded-lg px-4 py-2"
      >
        Save Document
      </button>
      <ToastContainer />
    </div>
  );
};

export default OCRPage;
