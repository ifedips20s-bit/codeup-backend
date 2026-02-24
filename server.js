const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => res.send('CodeUp Backend is alive!'));

app.listen(PORT, () => console.log(`CodeUp server running on port ${PORT}`));