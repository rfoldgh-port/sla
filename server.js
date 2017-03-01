var express = require('express');
// var googleapis = require('googleapis');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config');
var http = require('http');
var User = require('./models/userModel');
var session = require('express-session');
// var SkiSearchForm = require('./js/components/ski-search-form');
var React = require('react');

var MongoStore = require('connect-mongo')(session);
app.use(express.static(__dirname + '/build'));

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
 
 
var Yelp = require('yelp');


 app.get('/yelp-search', function(req, res) {
		
		  var yelp = new Yelp({
			  consumer_key: 'cqfxiVfo3jj8F8016f2uxQ',
			  consumer_secret: '43brpIlcD1y-JDi82e9F_w19ikM',
			  token: 'ixCWqXZbnqXJxwn1MCCEg8NlvMDU07yq',
			  token_secret: 'ylAMBr37pWqw3Ye-dF01bRNJVeM'
		});
		 
		yelp.search({ term: 'ski resort', location: req.query.location, limit: 10})
		.then(function (data) {
		 
		  res.json(data);
		  // res.render('build/index');
		})
		.catch(function (err) {
		  console.error(err);
		});
  
  
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
