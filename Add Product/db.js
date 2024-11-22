const mongoose = require("mongoose");

async function dbconnection() {
  var connection = await mongoose.connect(
    "mongodb://localhost:27017/productadds"
  );
  return connection;
}

module.exports = dbconnection;

//mongodb://localhost:27017/productadds
