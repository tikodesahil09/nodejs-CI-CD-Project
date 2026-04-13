var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
  after(function () {
    process.exit(0);
  });

  it('respond with 404 page not found', function (done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404, done);
  });
});
