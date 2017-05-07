

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://localhost/thinkful-jon';
//in a real world setting you’d have that set to a local variable, but assuming this is just a learning project, that should work

exports.GOOGLE_ID = process.env.GOOGLE_ID;
exports.GOOGLE_SECRET = process.env.GOOGLE_SECRET;
exports.GOOGLE_CALLBACK = process.env.GOOGLE_CALLBACK;

exports.PORT = process.env.PORT || 8080;
