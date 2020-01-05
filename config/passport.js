const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const key = require('./keys').secret;

const options = {};
options.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = key;

module.exports = passport => {
    passport.use(
        new jwtStrategy(options, (jwtPayload, done) => {
           User.findById(jwtPayload._id)
           .then(user => {
               if(user) return done(null, user);
               return done(null, false);
           })
           .catch(err => {
               console.log(err)
           })
        })
    )
};