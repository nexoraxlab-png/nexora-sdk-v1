const express = require("express");
const router = express.Router();

// Example: ClickBank or PartnerStack placeholder
router.get("/offers", (req, res) => {
  res.json({
    message: "Affiliate offers placeholder. This will be connected to real APIs later.",
    offers: [
      { id: 1, title: "High Ticket Program", network: "ClickBank" },
      { id: 2, title: "Business Automation Suite", network: "PartnerStack" }
    ]
  });
});

module.exports = router;
