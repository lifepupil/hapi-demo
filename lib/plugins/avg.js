'use strict';

exports.register = function(server, options, next) {
	server.route({
		method: 'GET',
		path: '/avg/{nums}',
		config: {
			description: 'To get sum of two numbers',
			handler: function(request, reply) {
				var nums = request.params.nums;
				var arr = nums.split(',');
				var avg = arr.reduce(function(acc,next) {
					return acc*1 + next*1;
				});
				avg = avg/arr.length;
				return reply({avg: avg });
			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'avg'
};
