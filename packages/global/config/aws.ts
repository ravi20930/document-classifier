import AWS from "aws-sdk";

const { AWS_ACCESS_KEY_SECRET, AWS_ACCESS_KEY, AWS_REGION } = process.env;

// Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_ACCESS_KEY_SECRET,
  region: AWS_REGION,
});

export default s3;
