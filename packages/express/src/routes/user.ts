import express, { Router } from "express";
import {
  getProfile,
  uploadImages,
  addUserPrompt,
  updatePromptResponse,
} from "../controllers/user";
import { uploadToS3 } from "../middlewares/s3upload";

const router: Router = express.Router();

router.post("/upload-image", uploadToS3, uploadImages);
router.post("/add-prompt", addUserPrompt);
router.post("/response", updatePromptResponse);

router.get("/", getProfile);

export default router;
