import createError, { HttpError } from "http-errors";

interface ErrorResponse {
  statusCode: number;
  message: string;
}

export const exceptionHandler = (
  err: HttpError,
  req: any,
  res: any,
  next?: Function
) => {
  const status: number = err.status || 500;
  let message: string = err.message || "Something went wrong! 🤦";

  // Check if the error is a 500 error and the environment is production
  if (status === 500 && process.env.NODE_ENV === "production") {
    message = "Something went wrong! 🤦";
  }

  // Log the error
  console.error(err);

  // Set response status
  res.status(status);

  // Return JSON response
  const errorResponse: ErrorResponse = {
    statusCode: status,
    message,
  };

  return res.json(errorResponse);
};

export const throwError = (statusCode: number, message: string): HttpError => {
  const error: HttpError = createError(statusCode, message);
  throw error;
};

export const responseHandler = (
  status: number,
  message: string,
  data?: any
) => ({
  statusCode: status,
  message,
  data,
});
