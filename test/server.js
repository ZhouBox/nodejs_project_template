
var http = require('http');
var url = require('url');

function start(config_app, router, config_router) {
	function onRequest(request, response) {
		var location = url.parse(request.url).pathname;
		router.router(config_router.router_mapping, location, request, response);
	}
	config_app.app = http.createServer(onRequest);
	config_app.app.listen(config_app.listen_port, config_app.listen_ip);
	config_app.app.maxConnections = config_app.max_connections;
}

exports.start = start;
	

