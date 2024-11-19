//C:\Users\CDAC\Desktop\WEB Tech\Node js\project1\index.js
var express = require("express");
//C:\Users\CDAC\Desktop\WEB Tech\Node js\project1\index.js
var mongoose = require("mongoose");
var db = require("./DataBase/db.js");
var cors = require("cors");

console.log(db);
db();

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  age: Number,
  place: String,
});

const userModel = mongoose.model("users", usersSchema);

var app = express();
app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
  try {
    var result = await userModel.find();
    res.send(result);
  } catch (err) {
    res.send(err.msg);
  }
});

app.post("/users", async function (req, res) {
  try {
    var record = new userModel(req.body); // Create a new user record
    var ans = await record.save(); // Save the record to the database
    res.send("Record inserted: "); // Respond with the inserted record's ID or other useful info
  } catch (err) {
    res.send("Error: " + err.message); // Send the error message
  }
});
//mysql
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cdac",
});

connection.connect();
//mysql database
app.get("/usersinfo/", async (req, res) => {
  try {
    connection.query("select * from emp;", (err, result) => {
      if (err) {
        res.send(err.msg);
      } else {
        res.send(result);
      }
    });
  } catch (err) {
    res.send("Error: " + err); // Send the error message
  }
});

app.post("/usersinfo/", async (req, res) => {
  //   console.log(req.body);

  connection.query("insert into emp set ?", req.body, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send("user Added");
    }
  });
});

// app.post("/users ", async function(req, res) {
//   //   console.log("req.body")
//   try {
//     var record = new userModel(req.body);
//     var ans=await record.save();
//     res.send("record inserted: ");
//   } catch (err) {
//     res.send(err.msg);
//   }
// });
app.listen(9000);

//http://localhost:9000/users

// app.put("/users ", (req, res) => {
//   res.send("Update data from database");
// });
// app.delete("/users", (req, res) => {
//   res.send("Delete data from database");
// });
