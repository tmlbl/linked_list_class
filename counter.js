module.exports = function () {
	var n = 0;
	function constructor () { }
	constructor.prototype.increment = function () {
		n++;
	};
	constructor.prototype.no = function () {
		return n;
	};
	return new constructor();
};