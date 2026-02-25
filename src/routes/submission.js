const express = require("express");
const router = express.Router();
const { runSubmission } = require("../services/dockerService");

router.post("/submit", (req, res) => {
  runSubmission((status, output) => {
    res.json({ status, output });
  });
});

module.exports = router;