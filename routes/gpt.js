const express = require("express");
const router = express.Router();

// GPT generation (placeholder - will use real API key later)
router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const result = `Generated response for: ${prompt}`;

    res.json({ text: result });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

module.exports = router;
