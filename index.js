const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

const routes = require('./routes/index.js')

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});