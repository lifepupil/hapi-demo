'use strict';

var Hapi = require('hapi');
// we create this after making world.js
var World = require('./plugins/world');
var Version = require('./plugins/version');
var Generic = require('./plugins/generic');
var AddNums = require('./plugins/addnums');
var AvgNums = require('./plugins/avg');



exports.init = function(port, next){
	var server = new Hapi.Server();
	// this sets the port on which the server is listening
	server.connection({port: port});

	server.register([World, Version, Generic, AddNums, AvgNums], function(err) {
		if(err) {return next(err);}
		// this actually starts the server
		server.start(function(err) {
			// the 'next'is the callback function passed in Server.init
			return next(err, server);
		});
	});

};
