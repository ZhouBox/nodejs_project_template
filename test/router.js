
	
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


