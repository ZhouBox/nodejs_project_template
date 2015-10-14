
	
function helloworld(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hello World!");
	response.end();
		
}

exports.helloworld = helloworld;
		



