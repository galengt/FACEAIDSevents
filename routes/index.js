
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Face Aids - Please Login' })
};

exports.login = function(req, res) {
    var foo = '';
    require('./query.js').makeQuery("Select password from faceaids.user where username=" + req.param('user'),  function selectCb(err, results, fields) {
    	if (err) {
		      throw err;
		}
        if (results.length > 0) {
            var firstResult = results[0];
            if (firstResult['password'] == req.param('password')) {
                res.render('chapters', { title: 'Chapters', chapters: results});        
            }
        }
        res.render('index', { title: 'Face Aids - Please Login' })
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
