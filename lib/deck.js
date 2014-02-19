module.exports = function (Card) {
  var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  var deck = [];
  for (var suit in suits) {
    for (var i = 1; i <= 13; i++) {
      deck.push(new Card(suit, i));
    }
  }
  function constructor () { }
  constructor.prototype.shuffle = function () {
    var x, y;
    for (var i = 0; i <= 100; i++) {
      x = Math.floor(Math.random()*52);
      y = Math.floor(Math.random()*52);
      x = deck[x];
      y = deck[y];
      deck[x] = y;
      deck[y] = x;
    }
  };
  constructor.prototype.draw = function () {
    return deck.pop();
  };
  constructor.prototype.countCards = function () {
    return deck.length;
  };
  constructor.prototype.showDeck = function () {
    return deck;
  };
  return new constructor();
};