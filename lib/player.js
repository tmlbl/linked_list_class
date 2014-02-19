module.exports = function () {
  var name = '';
  var hand = [];
  function constructor () { }
  constructor.prototype.getName = function () {
    if (name) {
      return name;
    }
  };
  constructor.prototype.setName = function (n) {
    name = n;
  };
  constructor.prototype.draw = function (card) {
    hand.push(card);
  };
  constructor.prototype.showHand = function () {
    return hand;
  };
  return new constructor();
};