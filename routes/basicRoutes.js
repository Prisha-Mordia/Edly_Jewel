const express = require('express');
const routes = express.Router();
const passport = require('passport');
const basiccontroller = require('../controllers/basicController');

routes.get('/blog', passport.checkUser, basiccontroller.blog);
routes.get('/contact', passport.checkUser, basiccontroller.contact);

module.exports = routes;