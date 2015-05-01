'use strict';

var Hapi = require('hapi');
// we create this after making world.js
var World = require('./plugins/world');
var Version = require('./plugins/version');
var Generic = require('./plugins/generic');
var AddNums = require('./plugins/addnums');
var AvgNums = require('./plugins/avg');
var Sumofsquares = require('./plugins/sumofsquares');
var Blipp = require('blipp');
var Good = require('./plugins/good');
var Quote = require('./plugins/quote');
var Mongoose = require('mongoose');



exports.init = function(port, next){
	var server = new Hapi.Server();
	// this sets the port on which the server is listening
	server.connection({port: port});

	// helps define which mongo server we are talking to
	Mongoose.connect(process.env.MONGO_URL);
	// this line is listening for mongo server
	Mongoose.connection.once('open', function() {
		server.register([Blipp, Good, Quote, World, Version, Generic, AddNums, AvgNums, Sumofsquares], function(err) {
			if(err) {return next(err);}
			// this actually starts the server
			server.start(function(err) {
				// the 'next'is the callback function passed in Server.init
				return next(err, server);
			});
		});
	});
};
