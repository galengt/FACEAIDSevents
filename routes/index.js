
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
				res.redirect('/templates');
			}
		} else {
			req.session.authenticatedUser = req.username;
			var errorMessage = 'Invalid username / password combination for: ' + req.param('user');
			res.render('error', { title: 'Face Aids - Error Logging In', errorMessage:  errorMessage});		
		}
	});	
};

exports.allUsers = function(req, res){
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		res.redirect('/');
	}
	require('./query.js').makeQuery("Select * from faceaids.user where active = 1",  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		res.render('users', { 
			users : results, 
			title : 'All Current Users' } );
	});
};

exports.user = function(req, res){
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		res.redirect('/');
	}
	require('./query.js').makeQuery("Select * from faceaids.user where id = "+req.params.id,  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		console.log(results);
		res.render('showuser', {
			user : results, 
			title : 'User' } );
	});
};



exports.templates = function(req, res) {
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		res.redirect('/');
	}
	var query = '*';
	if (req.param('q') != undefined) {
		query = req.param('q');
	}
	var Elastic = require('./elastic');
	var elastic = new Elastic('localhost', 9200);
	var searchResults = elastic.search('templates', 'event', query, function(err, response, body){
			var eventTemplates = JSON.parse(body);
			res.render('templates', { title: 'Template Events', templates: eventTemplates.hits}); 
	});
};

exports.events = function(req, res) {
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		res.redirect('/');
	}
	var query = '*';
	if (req.param('q') != undefined) {
		query = req.param('q');
	}
	var Elastic = require('./elastic');
	var elastic = new Elastic('localhost', 9200);
	var searchResults = elastic.search('instance', 'event', query, function(err, response, body){
			var eventInstances = JSON.parse(body);
			res.render('events', { title: 'Template Events', events: eventInstances.hits}); 
	});
}

exports.allChapters = function(req, res){
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		res.redirect('/');
	}
	require('./query.js').makeQuery("Select * from faceaids.chapter where active = 1",  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		res.render('chapters', { chapters : results, title : 'All Current Chapters' } );
	});
};

exports.chapter = function(req, res){
	loggedIn = require('./loggedin')
	if (!loggedIn(req)) {
		res.redirect('/');
	}
	require('./query.js').makeQuery("SELECT * FROM faceaids.chapter where id = "+req.params.id, function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		console.log(results);
		res.render('showchapter', {
		chapter : results,
		title : 'Chapter' } );
	});
}