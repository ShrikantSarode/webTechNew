const express = require("express");
const mongoose = require("mongoose");
const db = require("./DataBase/db.js");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false, // true for port 465, false for other ports
  service: "gmail",
  auth: {
    user: "shrikantsarode2001@gmail.com",
    pass: "ysvx ybdw fhib uelk",
  },
});



db(); // database connection done

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  mobile: Number,
});

const userModel = mongoose.model("newusers", userSchema); //collection model connected to schema

var app = express(); // to create a routes
app.use(express.json());

app.use(express.urlencoded());

app.get("/add", (req, res) => {
  res.render("adduser.ejs");
});

app.get("/show", async (req, res) => {
  try {
    var result = await userModel.find();
    res.render("showusers.ejs", { data: result });
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/useraction", async (req, res) => {
  try {
    var record = new userModel(req.body);
      await record.save();
      main(req.body.email);
      res.redirect("/show");
  } catch (err) {
    res.send(err.message);
  }
});

async function main(emailid) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '<shrikantsarode2001@gmail.com>', // sender address
    to: emailid,  // list of receivers
    subject: "Hello ✔", // Subject line
    text: "text", // plain text body
    html: "<b>Gandu Vekti</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

app.listen(9010);
