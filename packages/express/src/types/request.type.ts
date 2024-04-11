import { getUserReqObject } from "../../../global/utils/auth";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user: ReturnType<typeof getUserReqObject>;
    }
  }
}
