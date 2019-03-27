'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes.js');
const errorHandler = require('./handler/404.js');
const notFoundHandler = require('./handler/500.js');

app.use(express.static('./public'));
app.use(express.json());
app.use(routes);

app.use('*' , notFoundHandler);

app.use( errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
