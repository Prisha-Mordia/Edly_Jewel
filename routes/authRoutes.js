const express = require('express');
const routes = express.Router();
const authcontroller = require('../controllers/authController');
const passport = require('passport');

routes.get('/', authcontroller.index);
routes.get('/login', authcontroller.login);
routes.get('/register', authcontroller.register);
routes.post('/register', authcontroller.registerUser);
routes.post('/login', authcontroller.loginUser);

// routes.get('/', passport.checkUser, authcontroller.index);

routes.get('/logout', authcontroller.logout);

module.exports = routes;