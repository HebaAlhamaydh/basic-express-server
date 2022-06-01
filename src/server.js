'use strict';
const express = require('express');

const notFoundHandler = require('./error-handlers/ 404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middlewares/logger');
const validator = require('./middlewares/validator');

const app = express();

app.use(logger);
//app.use(validator);

app.get("/", (req, res) => {
    res.status(200).send('Hello ');
});
app.get("/person", validator,(req, res) => {
    res.json({ 
        name: req.name
    });
});

app.get("/data", (req, res) => {
    res.json({
        id: 1,
        name: 'heba',
        email: 'heba_hamaydh@gmail.com'
    });
});




app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
}