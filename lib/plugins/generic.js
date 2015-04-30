'use strict';

// We want to be able to ask for ANY attribute of the package.json object
var Package = require('../../package.json')

exports.register = function(server, options, next) {
	server.route({
		method: 'GET',
		path: '/generic/{name}',
		config: {
			description: 'To get any value in package.json',
			handler: function(request, reply) {
				return reply({version: Package[request.params.name]});
			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'generic'
};
