require("dotenv").config();
const { Sequelize } = require("sequelize");

const {
  DB_CONNECTION,
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  NODE_ENV,
} = process.env;

// Initialize Sequelize with database credentials
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_CONNECTION,
  dialectModule: require("pg"),
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
});

// Function to establish database connection
const connectDb = async (alter = false) => {
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
    console.error("Unable to connect to the getweekend database: ", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDb };
