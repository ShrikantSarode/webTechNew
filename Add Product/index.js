const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const upload = multer({ dest: "uploads/" });

const db = require("./db.js");
db();

const { Schema } = mongoose;

const productschema = new Schema({
  name: String,
  price: Number,
  discount: Number,
  image: String,
});

const productmodel = mongoose.model("products", productschema);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/addpro", (req, res) => {
  res.render("add.ejs");
});

app.get("/showpro", async (req, res) => {
  try {
    const products = await productmodel.find();
    res.render("show.ejs", { data: products });
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/productaction", upload.single("image"), async (req, res) => {
  try {
    const { name, price, discount } = req.body;
    const image = req.file.filename;

    const product = new productmodel({ name, price, discount, image });
    await product.save();

    res.redirect("/showpro");
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(9001);
