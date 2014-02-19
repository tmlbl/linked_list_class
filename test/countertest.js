var expect = require('chai').expect,
  Count = require('../lib/counter.js');

describe('Counter', function () {
  'use strict';
  var count;
  beforeEach(function () {
    count = new Count();
  });
  it('should exist', function () {
    expect(count).to.be.an('object');
  });
  it('should initialize to 0', function () {
    expect(count.no()).to.equal(0);
  });
  it('should increment', function () {
    count.increment();
    expect(count.no()).to.equal(1);
  });
});