const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const keys = require('./config/keys.js');

const app = express();

//create new instance with googlestrategy
//console.developers.google.com
passport.use(new GoogleStrategy({
    ClientID: keys.googleClientID,
    ClientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, accessToken => {
    console.log(accessToken)
})
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);