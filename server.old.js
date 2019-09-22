const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.sendFile(path.join(__dirname, 'dist', 'browser', 'index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.sendFile(path.join(__dirname, 'dist', 'browser', 'index.html'));
});

app.listen(process.env.PORT || 4000, () => {
    console.log('server started');
});
