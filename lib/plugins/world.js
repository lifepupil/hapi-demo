'use strict';

// when this function is run, it registers a route
exports.register = function(server, options, next) {
	// here we will define a route that has a
	server.route({
		method: 'GET',
		// this path will be appended to localhost: <port>
		path: '/hello',
		config: {
			description: 'To return world',
			// this is the core thing that will run when it is matched
			handler: function(request, reply) {
				return reply({message: 'world'});
			}
		}
	});
	// this is required to go to the next thing
	return next();
};

exports.register.attributes = {
	name: 'world'
};
