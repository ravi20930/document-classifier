import path from "path"; // Import path module to manipulate file paths
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { createLogger, format } = winston;
const { combine, timestamp, printf } = format;

const myFormat = printf(
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`
);

// Calculate the parent directory of the parent directory (two levels up)
const logsPath = path.resolve(__dirname, "../../../logs");

const infoTransport = new DailyRotateFile({
  filename: `${logsPath}/access-logs/application-%DATE%.log`,
  datePattern: "YYYY-MM-DD-HH",
  frequency: "24h",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
});

const errorTransport = new DailyRotateFile({
  filename: `${logsPath}/error-logs/error-%DATE%.log`,
  datePattern: "YYYY-MM-DD-HH",
  frequency: "24h",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
});

const cronTransport = new DailyRotateFile({
  filename: `${logsPath}/cron-logs/cron-%DATE%.log`,
  datePattern: "YYYY-MM-DD-HH",
  frequency: "24h",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
});

export const infoLogger = createLogger({
  format: combine(
    timestamp({ format: "YY-MM-DD hh:mm:ss" }),
    format.errors({ stack: true }),
    myFormat
  ),
  defaultMeta: { service: "user-service" },
  transports: [infoTransport],
});

export const errorLogger = createLogger({
  format: combine(
    timestamp({ format: "YY-MM-DD hh:mm:ss" }),
    format.errors({ stack: true }),
    format.json(),
    myFormat
  ),
  defaultMeta: { service: "user-service" },
  transports: [errorTransport],
});

export const cronLogger = createLogger({
  format: combine(
    timestamp({ format: "YY-MM-DD hh:mm:ss" }),
    format.errors({ stack: true }),
    myFormat
  ),
  defaultMeta: { service: "user-service" },
  transports: [cronTransport],
});

export const log = (msg: string) => {
  infoLogger.info(msg);
};

export const error = (req: any, err: any) => {
  errorLogger.error(`${req?.originalUrl} ${JSON.stringify(err.message)}`);
};

export const cronLog = (msg: string) => {
  cronLogger.info(msg);
};
