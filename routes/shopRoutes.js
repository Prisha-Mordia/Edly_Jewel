const express = require('express');
const routes = express.Router();
const passport = require('passport');
const shopcontroller = require('../controllers/shopController');


routes.get('/shop', passport.checkUser, shopcontroller.shop);

module.exports = routes;