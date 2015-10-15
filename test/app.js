
var server = require('./server');
var router = require('./router');
var config_router = require('./config_router');
var config_app = require('./config_app');
	
    
server.start(config_app, router, config_router);
		

