
console.log("connecting..."); 

var orm = require("orm");
var mysql = require("mysql");

var client = mysql.createClient({
	host:'localhost',
	port:3306,
	user:'root',
	password:'password'
}); 
	
var db = orm.connect("mysql", client, function (success, db) {
	host:'localhost'
	port:3306
	user:'root'
	password:'password'
});
	
console.log("connected.");


var user_query = "Select id from faceaids.user";

client.query(
  user_query,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    console.log(results);
    console.log(fields);
    client.end();
  }
);



