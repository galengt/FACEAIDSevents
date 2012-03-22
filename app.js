
console.log("connecting..."); 
var mysqlClient = require('mysql').createClient({'host':'localhost','port':3306,'user':'root','password':'password'}); 
console.log("connected.");

var user_query = "Select id from faceaids.user";

mysqlClient.query(
  user_query,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    console.log(results);
    console.log(fields);
    mysqlClient.end();
  }
);



