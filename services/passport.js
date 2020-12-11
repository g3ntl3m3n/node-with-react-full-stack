const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.ClientID,
    clientSecret: keys.ClientSecret,
    callbackURL: "http://127.0.0.1:5000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId:profile.id }).then((maUser)=>{
      if(maUser){
        //pass
        done(null, maUser);
      }else {
        new User({googleId: profile.id}).save().then(user =>  done(null, user));

      }
    });
  }
 
));
