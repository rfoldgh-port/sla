
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema ({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
	image: {
		type: String
	},
    name: String,
    favorites: [{name:String, image_url:String, rating:String, rating_img_url_large:String, id:String, url:String, review_count:String}],

});

var User = mongoose.model('User', UserSchema);



module.exports = User;
