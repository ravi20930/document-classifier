// TODO: make a global axios
import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { log, error } from "../../../global/utils/logger";
import {
  addPrompt,
  profile,
  updatePrompt,
  uploadImage,
} from "../services/user";
import { responseHandler, throwError } from "../../../global/utils/handler";

export const uploadImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: userId } = req.user;
    const imageUrls: string[] = [];

    // Extract image URLs from the files uploaded by multer-s3
    if (req.files && Array.isArray(req.files)) {
      imageUrls.push(
        ...(req.files as Express.MulterS3.File[]).map((file) => file.location)
      );
    } else throwError(400, "No images found.");
    await uploadImage(userId, imageUrls);
    const response = responseHandler(200, "successfully uploaded images.");
    return res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err);
    next(err);
  }
};

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: userId } = req.user;
    const userProfile = await profile(userId);
    const response = responseHandler(
      200,
      "successfully fetched profile.",
      userProfile
    );
    return res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err);
    next(err);
  }
};

export const addUserPrompt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { id: userId } = req.user;
    const { topic, slides } = req.body;
    if (slides > 10) {
      throwError(400, "Number of slides exceeds the limit of 10");
    }

    const pId = await addPrompt(topic);

    const prompt = `Compose LinkedIn carousel content with ${slides} slides on topic: ${topic}. Provide a concise heading as heading and one explanatory sentence as description for each slide. Provide Output as JSON array.`;
    // Call Flask endpoint to process prompt
    const flaskEndpoint = process.env.FLASK_SERVICE_URL + "/process-prompt";
    const result = await axios.post(flaskEndpoint, { prompt, id: pId });
    // console.log(response.data);

    const response = responseHandler(
      200,
      "successfully fetched response.",
      result.data
    );
    return res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err);
    next(err);
  }
};

export const updatePromptResponse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { id: userId } = req.user;
    const { promptId, response } = req.body;

    await updatePrompt(promptId, response);

    const mResponse = responseHandler(200, "successfully updated response.");
    return res.status(mResponse.statusCode).json(mResponse);
  } catch (err) {
    error(req, err);
    next(err);
  }
};
