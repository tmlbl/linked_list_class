var expect = require('chai').expect,
	List = require('../lib/list.js');

describe('List', function () {
	'use strict';
	var list;
  var testlist = {
    head: 42,
    tail: {
      head: 15,
      tail: {
        head: 3000,
        tail: null
      }
    }
  };
	beforeEach(function () {
		list = new List();
    list.set(testlist);
	});
	it('should get the list', function () {
		expect(list.get()).to.be.an('object');
	});
	it('should push a value', function () {
		list.push(21);
		expect(list.get().head).to.equal(21);
	});
  it('should pop a value', function () {
    expect(list.pop(1)).to.equal(15);
  });
  it('should verify a value', function () {
    expect(list.isElement(15)).to.equal(true);
  });
  it('should return the length', function () {
    expect(list.size()).to.equal(3);
  });
  it('should know if it is empty', function () {
    expect(list.empty()).to.equal(false);
    list.set({});
    expect(list.empty()).to.equal(true);
  });
});
