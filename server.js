var http = require('http');
var foo = require('./event')
// var bar = require('node.mysql')

var eventOne = foo.makeEvent('foo', 'bar', 'cat', 'dog');

console.log("connecting..."); 
var mysqlClient = require('mysql').createClient({'host':'localhost','port':3306,'user':'root','password':'password'}); 
console.log("connected.");

var user_query = "Select id from faceaids.user";
var query_result;
mysqlClient.query(
  user_query,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
	query_result = String(fields.id.length)x;
	console.log(fields.id.length);
    mysqlClient.end();
  }
);


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(query_result);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
console.log(eventOne);