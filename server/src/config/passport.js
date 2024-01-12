const ExtractJwt = require('passport-jwt').ExtractJwt;
const JWTStrategy = require('passport-jwt').Strategy;

const User = require('../models/User');
const initializePassport = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };
  passport.use(
    new JWTStrategy(options, (payload, done) => {
      console.log({ payload });
      User.findOne({ _id: payload.subg }, (error, user) => {
        if (err) {
          return done(error, false);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};

module.exports = initializePassport;
