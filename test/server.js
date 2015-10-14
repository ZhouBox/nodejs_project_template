
var http = require('http');
var url = require('url');

function start(router, config) {
	function onRequest(request, response) {
		var location = url.parse(request.url).pathname;
		router.router(config.router_mapping, location, request, response);
	}
	http.createServer(onRequest).listen(config.listen_port, config.listen_ip);

}

exports.start = start;
	

