var express = require('express');
// var googleapis = require('googleapis');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config');
var http = require('http');
var User = require('./models/userModel');

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
    clientID: '718688875995-nn8i6hhq6n8391qoikoti959v7l1ctad.apps.googleusercontent.com',
    clientSecret: '_ZXxY5B_w0T58mVON5bs76-0',
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.find({ googleId: profile.id }, function (err, user) {
		if(!user){
			User.create(user, () => {
				cb(err,user);
			});
		} else{
			return cb(err, user);
		}
      
    });
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read'] 
}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('helloworld');// Successful authentication, redirect home.
    res.redirect('/');
  });

 app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.use(express.static('/build'));
 
 // //Yelp API request
 // var api = http.createClient(80, 'https://api.yelp.com');
 
 // var request = api.request('GET', '/v2/search?term=food&location=San+Francisco',
 // {
		// 'host': 'https://api.yelp.com',
		// 'accept': 'application/json',
		// 'api-key': 'cqfxiVfo3jj8F8016f2uxQ'
 // });
 
 // request.on('response', function(response){});
 // request.end();

 
module.exports.runServer = runServer;
module.exports.app = app;
