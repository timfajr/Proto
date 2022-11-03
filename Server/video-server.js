var ws = require('ws');
var userCount = [];

var server = ws.createServer({
  debug: true
});

server.addListener("connection", function(conn){
  server.broadcast("userCount " + ++userCount);
  conn.addListener("message", function(message){
    server.broadcast(message);
  });
});

server.addListener("close", function(conn){
  server.broadcast("userCount " + --userCount);
});

server.listen(8000, "localhost");
function log(msg) {
    console.log(+new Date + ' - ' + msg.toString());
};