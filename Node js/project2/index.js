var express = require("express");

var mongoose = require("mongoose");
var db = require("./db");

console.log(db);
db();

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  price: Number,
  discount: String,
});

const userModel = mongoose.model("products", usersSchema);

var app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    var result = await userModel.find();
    res.send(result);
  } catch (err) {
    res.send(err.msg);
  }
});

app.post("/products", async function (req, res) {
  try {
    var record = new userModel(req.body); // Create a new user record
    var ans = await record.save(); // Save the record to the database
    res.send("Record inserted: "); // Respond with the inserted record's ID or other useful info
  } catch (err) {
    res.send("Error: " + err); // Send the error message
  }
});

app.listen(9000);
