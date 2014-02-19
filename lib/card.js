module.exports = function (suit, rank) {
	function constructor () { }
	constructor.prototype.getSuit = function () {
		return suit;
	};
	constructor.prototype.setSuit = function (s) {
		suit = s;
	};
	constructor.prototype.getRank = function () {
		return rank;
	};
	constructor.prototype.setRank = function (r) {
		rank = r;
	};
	return new constructor();
};