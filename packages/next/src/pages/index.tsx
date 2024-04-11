// pages/index.tsx
import React, { useRef } from "react";
import OCRPage from "../components/Ocr";

const Home: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <OCRPage />
    </div>
  );
};

export default Home;
