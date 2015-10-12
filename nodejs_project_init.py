import sys
import os


def create_project(name):
	if os.path.exists(name):
		print name + ' is exists!'
		return
	os.mkdir(name)
	os.chdir(name)
	index_f = open('index.js', 'w')
	index_code = """
var server = require('./server');
var router = require('./router');
var config = require('./config');
	
    
server.start(router.router, config.router_mapping, config.listen_port);
		

"""
	index_f.write(index_code)
	index_f.close()

	sever_f = open('server.js', 'w')
	sever_code = """
var http = require('http');
var url = require('url');

function start(router, router_mapping, listen_port) {
	function onRequest(request, response) {
		var location = url.parse(request.url).pathname;
		router(router_mapping, location, request, response);
	}
	http.createServer(onRequest).listen(listen_port);

}

exports.start = start;
	

"""
	sever_f.write(sever_code)
	sever_f.close()

	router_f = open('router.js', 'w')
	router_code = """
	
function router(router_mapping, location, request, response) {
	if (typeof router_mapping[location] === "function") {
		router_mapping[location](request, response);
	}
	else {
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end();
	}
}

exports.router = router


"""
	router_f.write(router_code)
	router_f.close()

	router_config_f = open('config.js', 'w')
	router_config_code = """

var request_handler = require('./request_handler');
	
var listen_port = 8888;

var router_mapping = {};

router_mapping['/'] = request_handler.helloworld;


exports.listen_port = listen_port;
exports.router_mapping = router_mapping;


"""
	router_config_f.write(router_config_code)
	router_config_f.close()

	request_handler_f = open('request_handler.js', 'w')
	request_handler_code = """
	
function helloworld(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hello World!");
	response.end();
		
}

exports.helloworld = helloworld;
		



"""
	request_handler_f.write(request_handler_code)
	request_handler_f.close()

	



	

if len(sys.argv) < 2:
	print 'no input project name'
else:
	create_project(str(sys.argv[1]))

	
