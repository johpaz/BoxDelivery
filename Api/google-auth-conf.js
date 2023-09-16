const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./src/models/userModel');
const dotenv = require('dotenv');
dotenv.config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
console.log(CLIENT_ID);
passport.use(new GoogleStrategy({
  clientID: 'process.env.GOOGLE_CLIENT_ID',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3004/register",
  passReqToCallback: true
},
function(request, accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id },{userName:profile.displayName}, function (err, user) {
    return done(err, user);
  });
}));

module.exports = passport;
