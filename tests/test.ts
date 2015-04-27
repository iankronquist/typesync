/// <reference path='../typings/tsd.d.ts' />
import mocha = require('mocha');
import request_builder = require('request');
import expect = require('expect.js');
import app = require('../src/app');
var request = request_builder.defaults({encoding: null});

describe('GET /', function() {
  it ('should say typescript', function(done) {
    var port = process.env.PORT || 8000;
    request.get('http://localhost:' + port + '/', function(err,
        res, body) {
      var bodyAsString = String.fromCharCode.apply(null, res.body);
      expect(err == null);
      expect(res.statusCode).to.be(200);
      expect(bodyAsString).to.be('hello typescript');
      done();
    });
  });
});
