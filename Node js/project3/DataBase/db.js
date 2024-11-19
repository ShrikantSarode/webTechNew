const mongoose = require("mongoose");

async function dbconnection() {
  var connection = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.7m9tx.mongodb.net/userDetails"
  );
  return connection;
}

module.exports = dbconnection;
