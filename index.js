const express = require('express')
const db = require('./config/db');
const path = require('path');
const PORT = 3001;

const app = express();
app.set('view engine','ejs');


app.use(express.urlencoded({ extended: true }));
app.use("/assets" , express.static(path.join(__dirname, 'public')));


///// Passport-login-Register
const passport = require('passport');
const passportLocal = require('./config/passport-strategy');
const session = require('express-session');
app.use(session({
    name: 'exam2023',
    secret: 'exam2023',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser)

app.use('/', require('./routes/indexRoutes'));

//// TESTING PORT IF IT IS WORKING
app.listen(PORT,(error)=>{
    if(error){
        console.log(error);
        return false
    }
    console.log(`PORT WORKING ALRIGHT http://localhost:${PORT}`)
})