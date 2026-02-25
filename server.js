const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const submissionRoute = require("./src/routes/submission");
app.use("/api", submissionRoute);

// Health check
app.get('/ping', (req, res) => res.send('CodeUp Backend is alive!'));

// Start server
app.listen(PORT, () => console.log(`CodeUp server running on port ${PORT}`));