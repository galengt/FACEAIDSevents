
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Face Aids - Please Login' })
};

var mysqlClient = require('mysql').createClient({'host':'localhost','port':3306,'user':'root','password':'password'}); 
var user_query = "Select username from faceaids.user";

var query_result;
mysqlClient.query(
  user_query,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    query_result = results;
    mysqlClient.end();
  }
);

exports.chapters = function(req, res){
	res.render('chapters', { title: 'Chapters', chapters: query_result}); 
};