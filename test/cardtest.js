var expect = require('chai').expect,
	Card = require('../card.js'),
	Count = require('../counter.js');

describe('Card:', function () {
	'use strict';
	var card;
	beforeEach(function () {
		card = new Card('Diamonds', 8);
	});
	describe('Constructor:', function () {
		it('Should be truthy', function () {
			expect(card).to.be.a('object');
		});
		it('Should have a settable suit', function () {
			card.setSuit('Hearts');
			expect(card.getSuit()).to.equal('Hearts');
		});
		it('Should have a settable rank', function () {
			card.setRank('9');
			expect(card.getRank()).to.equal('9');
		});
		it('Literals should be immutable', function () {
			card.suit = 'Hearts';
			expect(card.getSuit()).to.equal('Diamonds');
		});
	});
});
describe('Counter:', function () {
	'use strict';
	var count;
	beforeEach(function () {
		count = new Count();
	});
	describe('Constructor:', function () {
		it('Should exist', function () {
			expect(count).to.be.an('object');
		});
		it('Should initialize to 0', function () {
			expect(count.no()).to.equal(0);
		});
		it('Should increment', function () {
			count.increment();
			expect(count.no()).to.equal(1);
		});
	});
});
