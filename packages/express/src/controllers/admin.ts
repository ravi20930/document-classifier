import { Request, Response, NextFunction } from "express";
import { log, error } from "../../../global/utils/logger";
import { users, createNewAdmin, getAnyUserToken } from "../services/admin";
import { responseHandler, throwError } from "../../../global/utils/handler";

/**
 *
 */
export const getTokens = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      throwError(400, "Missing required field: userId");
    }
    const token = await getAnyUserToken(userId as string); // Cast userId to string
    const response = responseHandler(200, "token fetched successfully.", token);
    log("token fetched successfully.");
    return res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err as Error);
    next(err as Error);
  }
};

/**
 *
 */
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    log("fethcing all users");
    const data = await users(req.query);
    const response = responseHandler(200, "successfully fetched users", data);
    log("successfully fetched users.");
    return res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err);
    next(err);
  }
};

/**
 *
 */
export const newAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.query;
    log("creating new admin users");
    const data = await createNewAdmin(userId as string);
    const response = responseHandler(
      200,
      "successfully created new admin",
      data
    );
    log("successfully created new admin.");
    return res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err);
    next(err);
  }
};
