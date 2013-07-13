var uuid = require('node-uuid');

module.exports = function requestId() {
	return function requestId(req, res, next) {

		if(req.id !== undefined) {
			return next()
		}

		res.id = req.id = req.headers['request-id'] || uuid.v1();
        res.setHeader('request-id', req.id);

        next();
	}
}

