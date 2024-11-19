var fs = require("fs");

var http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    res.end(data);
  });
});

server.listen(9000);
