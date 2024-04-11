import { google, Auth } from "googleapis";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_AUTH_CALLBACK_URL } =
  process.env;
interface OAuthPayload {
  state: string;
  scopes: string[];
}

export const generateOAuthClient = (): Auth.OAuth2Client => {
  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_AUTH_CALLBACK_URL
  );
  return oAuth2Client;
};

// Generate OAuth2 URL based on provided payload
export const generateOAuthUrl: (payload: OAuthPayload) => string = (
  payload: OAuthPayload
): string => {
  const { state, scopes } = payload;
  const oAuth2Client = generateOAuthClient();

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    state,
  });

  return authUrl;
};
