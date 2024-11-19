//custom server configuration

var http = require('http');
// console.log(http);

const server= http.createServer((req,res) => {
    console.log(typeof req,res);
  
    res.end("Hello server!" );
    
});
server.listen(9000);

