// express web server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Testing Individual Assignment Week 01");
});

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});