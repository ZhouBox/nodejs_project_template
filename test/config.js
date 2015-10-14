

var request_handler = require('./request_handler');
	
var listen_port = 8888;
var listen_ip = '127.0.0.1';

var router_mapping = {};

router_mapping['/'] = request_handler.helloworld;


exports.listen_port = listen_port;
exports.router_mapping = router_mapping;


