require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const cors = require("cors");

const amqp = require("amqplib");
const { connectDb } = require("./db.config");
const UserPrompts = require("./db.model");
const { PORT, DB_SYNC_FLAG, NODE_ENV, AMQP_URL, FLASK_SERVICE_URL } =
  process.env;
const shouldSync = DB_SYNC_FLAG === "true";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to add prompts to the queue
app.post("/api/add-prompt", async (req, res) => {
  try {
    const { topic, slides } = req.body;
    if (slides > 10) {
      return res
        .status(400)
        .json({ error: "Number of slides exceeds the limit of 10" });
    }
    const userP = UserPrompts.build({ value: topic, type: "TEXT" });
    await userP.save();

    const prompt = `Compose LinkedIn carousel content with ${slides} slides on topic: ${topic}. Provide a concise heading as heading and one explanatory sentence as description for each slide. Provide Output as JSON array.`;
    // Call Flask endpoint to process prompt
    const flaskEndpoint = FLASK_SERVICE_URL + "/process-prompt";
    const response = await axios.post(flaskEndpoint, { prompt, id: userP.id });

    console.log(response.data);
    return res.status(200).json({
      status: 200,
      message: "Prompt added successfully",
      response: response.data,
    });
  } catch (error) {
    console.error("Error adding prompt:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to receive response and update the prompt table
app.post("/api/response", async (req, res) => {
  const { promptId, response } = req.body;

  try {
    const userPrompt = await UserPrompts.findByPk(promptId);
    if (!userPrompt) {
      return res.status(404).json({ error: "Prompt not found" });
    }
    userPrompt.response = response;
    await userPrompt.save();
    return res.status(200).json("Prompt updated successfully");
  } catch (error) {
    console.error("Error updating prompt:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Default endpoint
app.get("/api", async (req, res) => {
  res.status(200).json("working");
});

// Start the server
app.listen(PORT, async () => {
  await connectDb(shouldSync); // pass "true" to alter tables
  console.info(
    "🚀 Express server started at port %d in %s mode. Time: %s",
    PORT,
    NODE_ENV,
    new Date().toLocaleString()
  );
});
