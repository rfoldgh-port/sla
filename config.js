

exports.DATABASE_URL = process.env.DATABASE_URL ||
//in a real world setting you’d have that set to a local variable, but assuming this is just a learning project, that should work
                      global.DATABASE_URL ||
                      (process.env.NODE_ENV === 'production' ?
                              process.env.MONGO_URI : 'mongodb://<Holmberg18>:<Patience1!>@ds147975.mlab.com:47975/thinkful-jon'
                             'mongodb://localhost/ski-lift-app' :
                             'mongodb://localhost/ski-lift-app-dev');
exports.PORT = process.env.PORT || 8080;
