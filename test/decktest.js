var expect = require('chai').expect,
  Card = require('../lib/card.js'),
  Deck = require('../lib/deck.js');

describe('Deck', function () {
  var deck;
  beforeEach(function () {
    deck = new Deck(Card);
  });
  it('should exist', function () {
    expect(deck).to.be.an('object');
  });
  it('should draw a valid card', function () {
    var card = deck.draw();
    expect(card.getSuit).to.be.a('function');
  });
  it('should have 52 cards', function () {
    expect(deck.countCards()).to.equal(52);
  });
  it('should remove cards when drawn', function () {
    var card = deck.draw();
    expect(deck.countCards()).to.equal(51);
  });
  it('should shuffle', function () {
    deck.shuffle();
  });
});