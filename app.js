const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/studentRoutes')

const app = express();
app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;