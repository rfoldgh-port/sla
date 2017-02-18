var express = require('express');
var googleapis = require('googleapis');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config');

app.use(express.static('static'));

var GoogleStrategy = require('passport-google-oauth20').Strategy;

var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
			 if (callback) {
                callback();
            }
			 // return res.status(200).json({message:'root url connected'})
       
        });
    });
};


if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

passport.use(new GoogleStrategy({
    clientID: '718688875995-hv53rijjc43o92c87t73r33jv28i0fhm.apps.googleusercontent.com',
    clientSecret: 'u50AeUdw81MXGq08JLzoyZp1',
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/google',
 passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
 
module.exports.runServer = runServer;
module.exports.app = app;
