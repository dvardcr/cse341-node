// express web server

const express = require('express');
const dotenv = require("dotenv")
const app = express();
const port = 3000;

dotenv.config()

app.use('/', require('./routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});