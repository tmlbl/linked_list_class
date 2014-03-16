module.exports = function () {
  var list = {};
  var constructor = function () { };
  constructor.prototype.get = function () {
    return list;
  }
  constructor.prototype.set = function (l) {
    list = l;
  }
  constructor.prototype.push = function (val) {
    list = { head: val, tail: list };
  }
  constructor.prototype.pop = function (pos) {
    var n = list;
    for (var i = pos - 1; i >= 0; i--) {
      n = n.tail;
    };
    return n.head;
  }
  constructor.prototype.isElement = function (el) {
    var n = list;
    while (n) {
      if (n.head === el) {
        return true;
      } else {
        n = n.tail;
      }
    }
    return false;
  }
  constructor.prototype.size = function () {
    var n = list, x = 0;
    while (n) {
      x++;
      n = n.tail;
    }
    return x;
  }
  constructor.prototype.empty = function () {
    if (list.head) {
      return false;
    } else {
      return true;
    }
  }
  return new constructor();
}

