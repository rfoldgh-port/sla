var express = require('express');
// var googleapis = require('googleapis');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config');
var http = require('http');
var User = require('./models/userModel');
var session = require('express-session');

var MongoStore = require('connect-mongo')(session);
app.use(express.static('static'));

app.use(session({
  secret: 'meda',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

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
 
 //Yelp API request
 // var api = http.request(80, 'https://api.yelp.com');
 
 // var request = api.request('GET', '/v2/search?term=food&location=San+Francisco',
 // {
	
		// 'accept': 'application/json',
		// 'api-key': 'cqfxiVfo3jj8F8016f2uxQ'
 // });
 
 var request = require('request');
request('https://api.yelp.com/cqfxiVfo3jj8F8016f2uxQ/v2/search?term=food&location=San+Francisco&limit=1', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
 
 
if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};
 
module.exports.runServer = runServer;
module.exports.app = app;
