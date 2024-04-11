import { Request, Response, NextFunction } from "express";
import multer, { Multer } from "multer";
import s3 from "../../../global/config/aws";
import multerS3 from "multer-s3";

const { S3Client } = require("@aws-sdk/client-s3");

// Set up multer storage to upload directly to S3
const upload: Multer = multer({
  storage: multerS3({
    s3: s3 as typeof S3Client,
    bucket: process.env.AWS_S3_BUCKET_NAME!,
    acl: "public-read", // Set access control
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req: Request, file: Express.Multer.File, cb: Function) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req: Request, file: Express.Multer.File, cb: Function) {
      const folderName: string = "user-images"; // Add your folder name here
      const fileName: string = req.user.id + "-" + file.originalname;
      cb(null, folderName + "/" + fileName);
    },
  }),
});

// Middleware function to handle file upload
const uploadToS3: (req: Request, res: Response, next: NextFunction) => void =
  upload.array("images", 10);

export { uploadToS3 };
