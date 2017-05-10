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
var cookie = require('cookie-parser');
var bodyParser = require('body-parser');


var MongoStore = require('connect-mongo')(session);

app.use(express.static(__dirname + '/build'));


passport.serializeUser(function(user, done) {
	console.log("Serialize",user);
  done(null, user._id);
});


passport.deserializeUser(function(id, done) {
	console.log("Deserialize",id);
  User.findById(id, function(err, user) {
	  console.log(user);
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
    callbackURL: 'https://gentle-bastion-25076.herokuapp.com/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ googleId: profile.id }, function (err, user) {
		console.log(err, user);
		if(!user){
			var newUser = {googleId: profile.id, name:profile.displayName, email:profile.emails[0].value, image: profile.photos[0].value}
			console.log(newUser);
			User.create(newUser, (err) => {
				console.log(err);
				cb(err,newUser);
			});
		} else{
			return cb(err, user);
		}

    });
  }
));


app.use(cookie("ski-lift-app"));
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(session({
  secret: 'meda',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());



app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read']
}));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/' }));

 app.get('/logged-out', function(req, res) {
			req.logout();
			res.redirect('/#/');
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

		  res.status(200).json(data);
		  // res.render('build/index');
		})
		.catch(function (err) {
		  console.error(err);
		});


  });

  app.get('/ski-favorites', function(req,res){

	res.status(200).json(req.user);

  });

	app.get('/logged-out', function(req,res){
		req.logout();
		res.sendStatus(200);

	});

  app.post('/ski-favorites', function(req,res){



    var query = {"_id": req.user._id};
    var update = {$addToSet:{favorites: req.body.skiFavorite}};
		console.log(query,update);
    User.findOneAndUpdate(query, update, function(err){

        console.log(err);

    	res.status(201).json({message:'Favorite added'});

});


});

//
  app.delete('/ski-favorites', function(req,res){

    var query = {"_id": req.user._id};
    var update = {$pull:{favorites:{id:req.body.skiFavorite.id}}};

    User.findOneAndUpdate(query, update, function(err){

        console.log(err);

    	res.status(201).json({message:'Favorite deleted'});

});


});

 app.get('/user', function(req,res){
 	  	console.log(req.user);

	 res.status(200).json(req.user);

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
