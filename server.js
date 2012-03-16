var http = require('http');
var foo = require('./event')

var eventOne = foo.makeEvent('foo', 'bar', 'cat', 'dog');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(eventOne.toJson());
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
console.log(eventOne);