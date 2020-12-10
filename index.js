const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('./config/keys.js');
const app = express();



passport.use(new GoogleStrategy({
    clientID: keys.ClientID,
    clientSecret: keys.ClientSecret,
    callbackURL: "http://127.0.0.1:5000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
      console.log('acces-token:', accessToken);
      console.log('refresh-token:', refreshToken);
      console.log('profile:', profile);
  }
 
));
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback', passport.authenticate('google'))

  
const PORT = process.env.PORT || 5000;
app.listen(PORT);