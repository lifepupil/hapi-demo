'use strict';

exports.register = function(server, options, next) {
	server.route({
		method: 'GET',
		path: '/sumofsquares/{nums}',
		config: {
			description: 'To get sum of squares for string of numbers',
			handler: function(request, reply) {
				var nums = request.params.nums.split(',');
				var ss = nums.reduce(function(acc,next) {
					return acc*1 + Math.pow(parseFloat(next), 2);
				});
				return reply({ss: ss });
			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'sumofsquares'
};
