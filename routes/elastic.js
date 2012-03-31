var ElasticClient =  function(host, port) {
	this.host = host;
	this.port = port;
	this.baseUrl = 'http://' + host + ':' + port + '/';
	this.request = require('request');
};

ElasticClient.prototype.search = function(index, objectType, queryParam, callbackFunction) {
	var url = this.baseUrl + index + '/' + objectType + '/' + '_search?q=' + queryParam;
	console.log(url);
	this.request({uri: url}, callbackFunction);
};

ElasticClient.prototype.getHost = function() {
	return this.host;
};

ElasticClient.prototype.getPort = function() {
	return this.port;
};

module.exports = ElasticClient;