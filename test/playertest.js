var expect = require('chai').expect,
  Card = require('../lib/card.js'),
  Deck = require('../lib/deck.js'),
  Player = require('../lib/player.js');

describe('Player', function () {
  var deck, player;
  beforeEach(function () {
    deck = new Deck(Card);
    player = new Player();
  });
  it('should exist', function () {
    expect(player).to.be.an('object');
  });
  it('should have a hand', function () {
    expect(player.showHand()).to.be.an('array');
  });
  it('should draw a card', function () {
    player.draw(deck.draw());
    expect(player.showHand().length).to.equal(1);
  });
});