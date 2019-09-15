const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'letsart')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'letsart', 'index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'letsart', 'index.html'));
});

app.listen('80', () => {
    console.log('server started');
});
