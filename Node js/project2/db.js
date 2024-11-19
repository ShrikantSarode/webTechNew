var mongoose = require('mongoose');

async function dbConnect() {
  var connection = await mongoose.connect("mongodb://127.0.0.1:27017/products");
    return connection;
}
module.exports = dbConnect;