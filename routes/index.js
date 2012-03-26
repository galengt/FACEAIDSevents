
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Face Aids - Please Login' })
};

exports.login = function(req, res) {
    var foo = '';
    require('./query.js').makeQuery("Select password from faceaids.user where username='" + req.param('user') + "'",  function selectCb(err, results, fields) {
    	if (err) {
		      throw err;
		}
        if (results.length > 0) {
            var firstResult = results[0];
            if (firstResult['password'] == req.param('pswd')) {
                exports.chapters(req, res);
            }
			else {
				  var errorMessage = 'Invalid username / password combination for: ' + req.param('user');
				  res.render('error', { title: 'Face Aids - Error Logging In', errorMessage:  errorMessage})
			}
        } else {
			  var errorMessage = 'That username doesn\'t exist';
			  res.render('error', { title: 'Face Aids - Error Logging In', errorMessage:  errorMessage})
		}
		
	 });
};

exports.chapters = function(req, res){
	require('./query.js').makeQuery("Select username from faceaids.user",  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		res.render('chapters', { title: 'Chapters', chapters: results}); 
	  });	
};
