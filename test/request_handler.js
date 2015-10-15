
var config_app = require('./config_app');

	
function helloworld(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hello World!");
	response.end();
		
}

function current_connects(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('current connections is ' + config_app.app.connections);
	response.end();

}

function max_connects(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('max connects is ' + config_app.app.maxConnections);
	response.end();

}

exports.helloworld = helloworld;
exports.current_connects = current_connects;
exports.max_connects = max_connects;


