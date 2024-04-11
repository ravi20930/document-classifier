import dotenv from "dotenv";
import { Dialect, Sequelize } from "sequelize";
import path from "path"; // Import path module

//TODO: exported sequelize not wokring in express check why
// export const sequelizePkg = require("sequelize");

// Specify the path to the root .env file
const envFilePath = path.resolve(__dirname, "../../.env");
// Load environment variables from the root .env file
dotenv.config({ path: envFilePath });

// Extract database credentials and environment variables
const {
  DB_CONNECTION,
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  NODE_ENV,
} = process.env;

// Initialize Sequelize with database credentials
export const sequelize = new Sequelize(
  DB_DATABASE!,
  DB_USERNAME!,
  DB_PASSWORD!,
  {
    host: DB_HOST!,
    dialect: DB_CONNECTION as Dialect,
    // dialectModule: require("pg"),
    define: {
      freezeTableName: false,
    },
    logging: NODE_ENV === "development" ? console.log : false,
    dialectOptions:
      NODE_ENV === "development"
        ? {}
        : {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 600000,
    },
  }
);

// Function to establish database connection
export const connectDb = async (alter: boolean = false): Promise<void> => {
  try {
    // Authenticate/sync with the database
    await sequelize.sync({ alter });
    console.log(
      "✅ Database connection has been successfully established to %s database with host: %s",
      DB_DATABASE,
      DB_HOST
    );
    console.log("✅ Models synchronized successfully");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
    process.exit(1);
  }
};
