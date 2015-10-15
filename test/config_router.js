

var request_handler = require('./request_handler');
	
var router_mapping = {};

router_mapping['/'] = request_handler.helloworld;
router_mapping['/cc'] = request_handler.current_connects;
router_mapping['/mc'] = request_handler.max_connects;

exports.router_mapping = router_mapping;


