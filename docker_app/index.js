const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('How are you doing');
});

// Take in account the port
app.listen(8080, () => {
    console.log('Listening on port 8080');
});