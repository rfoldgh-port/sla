
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema ({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    alias: String,
    favorites: [{ski_resort_name: String, ski_resort_address: String}],
    
});

var User = mongoose.model('User', UserSchema);



module.exports = User;