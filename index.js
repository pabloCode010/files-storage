const express = require('express');
const enrouteApi = require('./src/routes/enroute-api');
const morgan = require('morgan');
const notFoud = require('./src/errors/not-foud');
const handler = require('./src/errors/handler');
const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("dev"));

enrouteApi(app);

app.use(notFoud);
app.use(handler);

app.listen(port, console.log("server init"));