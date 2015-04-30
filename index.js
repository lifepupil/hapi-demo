'use strict';

var Hoek = require('hoek');
var Server = require('./lib/server');

Server.init(8000, function(err, server){
	// this blows up if there's an error
	// this callback function is called by the
	// return next(err, server) statement
	// The assertion is a kind of claim (or hope) that
	// the server is NOT blowing up.
	Hoek.assert(!err, err);
	console.log('Hapi is listening', server.info.uri);
});
