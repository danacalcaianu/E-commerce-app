const config = require('./index');
const mongoose = require('mongoose');

function cleanup() {
  mongoose.connection.close(() => {
    process.exit(0);
  });
}
module.exports = (app) => {
  mongoose.connect(config.mongoUrl, { useMongoClient: true });
  mongoose.Promise = global.Promise;

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);

  if (app) {
    app.set('mongoose', mongoose);
  }
};

