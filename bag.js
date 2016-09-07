
function Bag() {
  this.itemList = [];
}

Bag.prototype.hashKey = function hashKey(key) {
  var value = 0;
  for (var index = 0; index < key.length; index++) {
    var code = key.charCodeAt(index);
    value = (value << 5) - value + code | 0;
  }
  return value;
};

Bag.prototype.get = function get(key) {
  var address = this.hashKey(key);
  return this.itemList[address];
};

Bag.prototype.set = function set(key, value) {
  var address = this.hashKey(key);
  this.itemList[address] = value;
}

function BagItem (name, quantity, restore) {
  this.name = name;
  this.quantity = quantity;
  this.restore = restore;
}

var Berry = new BagItem('Oran Berry', 5, 10);
var Potion = new BagItem('Potion', 5, 20);
var SuperPotion = new BagItem('Super Potion', 5, 50);
var HyperPotion = new BagItem('Hyper Potion', 5, 200);

var myBag = new Bag();

myBag.set(Berry.name, Berry.quantity);
myBag.set(Potion.name, Potion.quantity);
myBag.set(SuperPotion.name, SuperPotion.quantity);
myBag.set(HyperPotion.name, HyperPotion.quantity);
