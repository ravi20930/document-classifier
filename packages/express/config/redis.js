const Redis = require("ioredis");

const { REDIS_HOST, REDIS_PORT, REDIS_USERNAME, REDIS_PASSWORD, NODE_ENV } =
  process.env;

const client = new Redis({
  host: REDIS_HOST || "127.0.0.1",
  port: REDIS_PORT || "6379",
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD,
  db: NODE_ENV === "production" ? "1" : "0",
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = client;
