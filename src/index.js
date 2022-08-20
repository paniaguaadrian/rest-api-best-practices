const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h2>It's working!</h2>");
});

app.listen(PORT, () => {
    console.log('API is listening on port: ' + PORT);
});
