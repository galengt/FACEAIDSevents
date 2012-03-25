// var mysqlClient = require('mysql').createClient({'host':'localhost','port':3306,'user':'root','password':'password'}); 

function makeQuery(someQuery, callbackFunction) {
   var mysqlClient = require('mysql').createClient({'host':'localhost','port':3306,'user':'root','password':'password'});
   mysqlClient.query(someQuery, callbackFunction);    
}

module.exports.makeQuery = makeQuery;
