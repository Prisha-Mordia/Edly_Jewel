const express = require('express');
const routes = express.Router();
const authroute = require('./authRoutes')
const shoproute = require('./shopRoutes')
const basicroute = require('./basicRoutes')


routes.use('/', authroute);
routes.use('/', shoproute);
routes.use('/', basicroute);

module.exports = routes;