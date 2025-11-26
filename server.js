const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Nexora SDK is running." });
});

// GPT Endpoint
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    // Placeholder OpenAI API call
    const response = { text: `Generated response for: ${prompt}` };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// Start Server on Render PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Nexora SDK running on port ${PORT}`);
});
