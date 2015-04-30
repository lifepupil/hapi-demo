'use strict';

var Hapi = require('hapi');




exports.init = function(port, next){
	var server = new Hapi.Server();
	// this sets the port on which the server is listening
	server.connection({port: port});

	// this actually starts the server
	server.start(function(err) {
		// the 'next'is the callback function passed in Server.init
		// 
		return next(err, server);
	});
};
