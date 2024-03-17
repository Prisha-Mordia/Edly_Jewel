const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const passport = require('passport');

const index = (req, res) => {
    if (res.locals.users) {
        return res.render('index');
    }
    return res.redirect('/login');
}

const login = (req, res) => {
    if (res.locals.users) {
        return res.redirect('/');
    }
    return res.render('login');
}

const register = (req, res) => {
    if (res.locals.users) {
        return res.redirect('/');
    }
    return res.render('register');
}

const registerUser = async (req, res) => {
    try {
        if (req.body.password == req.body.confirmPassword) {
            let users = await userModel.create({
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10)
            })
            console.log("User register");
            return res.redirect('/');
        } else {
            console.log("password and confirm password not match");
            return res.redirect('back');
        }

    } catch (err) {
        console.log(err);
        return false;
    }
}

const loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            console.log("Invalid email or password");
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            console.log("User logged in successfully");
            return res.redirect('/');
        });
    })(req, res, next);
};

const mainpage = (req, res) => {
    return res.render('index');
}

const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/login');
    })
}

module.exports = {
    index, register, registerUser, loginUser, mainpage , logout, login

}