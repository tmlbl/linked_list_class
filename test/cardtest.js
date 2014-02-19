var expect = require('chai').expect,
	Card = require('../lib/card.js');

describe('Card', function () {
	'use strict';
	var card;
	beforeEach(function () {
		card = new Card('Diamonds', 8);
	});
	it('should be truthy', function () {
		expect(card).to.be.a('object');
	});
	it('should have a settable suit', function () {
		card.setSuit('Hearts');
		expect(card.getSuit()).to.equal('Hearts');
	});
	it('should have a settable rank', function () {
		card.setRank('9');
		expect(card.getRank()).to.equal('9');
	});
	it('literals should be immutable', function () {
		card.suit = 'Hearts';
		expect(card.getSuit()).to.equal('Diamonds');
	});
});