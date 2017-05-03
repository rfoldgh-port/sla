

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://localhost/thinkful-jon';
//in a real world setting you’d have that set to a local variable, but assuming this is just a learning project, that should work



exports.PORT = process.env.PORT || 8080;
