import path from "path";
import dotenv from "dotenv";

// Get the current file path
const currentFilePath = new URL(import.meta.url);
// Convert the URL to a string
const currentDirectoryPath = path.dirname(currentFilePath.pathname);

// Load environment variables from the desired path
const envPath = path.resolve(currentDirectoryPath, "../../.env");
dotenv.config({ path: envPath });

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
