var fs = require("fs");

console.log("Starting");

var ans = fs.readFileSync("index.html", "utf8");

console.log(ans);

console.log("End");
