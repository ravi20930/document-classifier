import { Request, Response, NextFunction } from "express";
import { log, error } from "../../../global/utils/logger";
import { responseHandler } from "../../../global/utils/handler";
import {
  generateOAuthClient,
  generateOAuthUrl,
} from "../../../global/config/google";
import { generateToken } from "../../../global/utils/auth";
import { findOrCreateByGoogleId } from "../services/user";
// const { GOOGLE_AUTH_SUCCESS_URL } = process.env;

export const googleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const scopes: string[] = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ];
    const authUrl = generateOAuthUrl({
      state: "null",
      scopes,
    });
    const response = responseHandler(200, "Google auth URL.", authUrl);
    return res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err);
    next(err);
  }
};

export const googleSignInCallback = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { code } = req.query;

    const { tokens } = await generateOAuthClient().getToken(code as string);

    // Get user info from Google
    const userInfo = await generateOAuthClient().getTokenInfo(
      tokens.access_token ?? ""
    );
    console.log("userInfo", userInfo);

    const user = await findOrCreateByGoogleId(
      userInfo.sub ?? "",
      userInfo.email ?? ""
    );

    const token = generateToken(user, "access");

    const response = responseHandler(200, "Google sign in successful.", {
      token,
    });
    res.status(response.statusCode).json(response);
  } catch (err) {
    error(req, err);
    next(err);
  }
};
