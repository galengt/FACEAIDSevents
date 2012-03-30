
/*
 * GET home page.
 */

exports.index = function(req, res){
	loggedIn = require('./loggedin')
	if (loggedIn(req)) {
		exports.templates(req, res);
	} else {
		res.render('index', { title: 'Face Aids - Please Login' })
	}
};

exports.login = function(req, res) {	
	require('./query.js').makeQuery("Select password from faceaids.user where username='" + req.param('user') + "'",  function selectCb(err, results, fields) {
    	if (err) {
		      throw err;
		}
        if (results.length > 0) {
			var firstResult = results[0];
			if (firstResult['password'] == req.param('pswd')) {
				req.session.authenticatedUser = req.param('user');
				exports.templates(req, res);
			}
		} else {
			req.session.authenticatedUser = req.username;
			var errorMessage = 'Invalid username / password combination for: ' + req.param('user');
			res.render('error', { title: 'Face Aids - Error Logging In', errorMessage:  errorMessage});		
		}
	});	
};

exports.chapters = function(req, res){
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		exports.login(req, res);
	}
	require('./query.js').makeQuery("Select username from faceaids.user",  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		res.render('chapters', { title: 'Chapters', chapters: results}); 
	  });	
};

exports.templates = function(req, res) {
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		exports.login(req, res);
	}
	var Elastic = require('./elastic');
	var elastic = new Elastic('localhost', 9200);
	var searchResults = elastic.searchAll('templates', 'event', function(data) {
		var eventTemplates = JSON.parse(data);
		res.render('templates', { title: 'Template Events', templates: eventTemplates.hits}); 
	});		
};

exports.users = function(req, res){
	require('./query.js').makeQuery("Select username, firstname, lastname, school from faceaids.user",  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		res.render('users', { users : results, title : 'All Current Users' } );
	});
};

