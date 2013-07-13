var should = require('should');
var connect = require('connect');
var request = require('supertest');
var connectRequestId = require('./');

var app = connect();

app.use(connectRequestId());


app.use(function(req, res){
  res.end(JSON.stringify({
  		reqId: req.id,
  		resId: res.id
  	}));
});


describe('request-id', function(){
	it('should be generate a uuid when no request-id header is set', function(done){

		request(app)
		.get('/')
		.end(function(err, res){
			res.should.have.header('request-id');
			res.headers['request-id'].should.have.length(36);

			var body = JSON.parse(res.res.text);

			res.headers['request-id'].should.equal(body.reqId);
			body.reqId.should.equal(body.resId);
			done()
		})

	})

	it('should use a "request-id" header when supplied', function(done){

		var ourId = 'super-awesomeness'

		request(app)
		.get('/')
		.set('request-id', ourId)
		.end(function(err, res){
			res.should.have.header('request-id', ourId);

			var body = JSON.parse(res.res.text);
			body.reqId.should.equal(ourId);
			body.resId.should.equal(ourId);
			done();
		})
	})
})
