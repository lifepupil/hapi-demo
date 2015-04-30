'use strict';

exports.register = function(server, options, next) {
	server.route({
		method: 'GET',
		path: '/addnums/{x}/{y}',
		config: {
			description: 'To get sum of two numbers',
			handler: function(request, reply) {
				return reply({sum: (request.params.x) });
			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'addnums'
};
