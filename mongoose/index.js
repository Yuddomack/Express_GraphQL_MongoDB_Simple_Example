module.exports = (function(){
  const mongoose = require('mongoose');
  const URI = process.env.MONGO_URI || "localhost"; // your mongodb uri
  const DB = process.env.MONGO_DB || "mongoose"; // your db

  const db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', function(){
      // CONNECTED TO MONGODB SERVER
      console.log("Connected to mongod server");
  });

  mongoose.connect(`mongodb://${URI}/${DB}`, { useNewUrlParser: true });

  const schema = {};
  const model = {};

  schema.Post = require('./schema/post')(mongoose);
  schema.User = require('./schema/user')(mongoose);

  for(let k in schema){
    model[k] = mongoose.model(k, schema[k]);
  }

  return model;
})();
