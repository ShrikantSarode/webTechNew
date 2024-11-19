//Asysnchronous way

var fs = require("fs");

console.log("start");

fs.readFile("./index.html", "utf-8", (err, data) => {
  console.log(data);
});

console.log("End");
