
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
    favorites: [{name:String, img_url:String, id:String}],
    
});

var User = mongoose.model('User', UserSchema);



module.exports = User;