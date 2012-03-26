
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Face Aids - Please Login' })
};

exports.login = function(req, res) {
    res.
};

exports.chapters = function(req, res){
	require('./query.js').makeQuery("Select username from faceaids.user",  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		res.render('chapters', { title: 'Chapters', chapters: results}); 
	  });	
};
