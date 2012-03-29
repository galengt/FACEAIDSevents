module.exports = function(req) {
	return req.session.authenticatedUser != undefined && req.session.authenticatedUser != null;
};