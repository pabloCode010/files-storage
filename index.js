const express = require('express');
const app = express();

const morgan = require('morgan');
const enroute = require('./src/routes/enroute');
const notFoud = require('./src/errors/not-foud');
const handler = require('./src/errors/handler');

const port = process.env.PORT || 3000;

app.use(morgan("dev"));

enroute(app);

app.use(notFoud);
app.use(handler);

app.listen(port, console.log("server init"));