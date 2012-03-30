//TODO This isn't used, duplicated in index, how do we get the routes working?!

exports.users = function(req, res){
	require('./query.js').makeQuery("Select username, firstname, lastname, school from faceaids.user",  function selectCb(err, results, fields) {
		if (err) {
		      throw err;
		}
		res.render('users', { users : results, title : 'All Current Users' } );
	});
};