var ElasticClient =  function(host, port) {
	this.host = host;
	this.port = port;
	ElasticSearchClient = require('elasticsearchclient');
	var serverOptions = {
	    host: host,
	    port: port,
	};
 	this.searchClient = new ElasticSearchClient(serverOptions);
};

ElasticClient.prototype.searchAll = function(index, objectType, callbackFunction) {
 	this.searchClient.search(index, objectType)
		.on('data', callbackFunction)
		.on('error', function(error){
			console.log(error)
		}).exec();
};

ElasticClient.prototype.getHost = function() {
	return this.host;
};

ElasticClient.prototype.getPort = function() {
	return this.port;
};

module.exports = ElasticClient;