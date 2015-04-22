/// <reference path='../typings/tsd.d.ts' />
import mocha = require('mocha');
import request_builder = require('request');
import expect = require('expect.js');
import app = require('../src/app');
var request = request_builder.defaults({encoding: null});

describe('GET /', function() {
  it ('should say typescript', function(done) {
    request.get('http://localhost:' + process.env.PORT + '/', function(err,
        res, body) {
      expect(err == null);
      console.log(res);
      expect(res.statusCode).to.be(200);
      expect(res.body).to.be('hello typescript');
      done();
    });
  });
});
