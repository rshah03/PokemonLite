function BagObj(itemList) {
		this.itemList = itemList;
}

//BagObj functions
BagObj.prototype.hashKey = function(key) {
	var value = 0;
	for (var i = 0; i < key.length; index++) {
		var keycode = key.charCodeAt(index);
		value = (value << 5) - value + code | 0;
	}
	return value;
};

BagObj.prototype.get = function get(key) {
	var address = this.hashKey(key);
	return this.itemList[address];
};

BagObj.prototype.set = function get(key, value) {
	var address = this.hashKey(key);
	this.itemList[address] = value;
};

function BagItem(itemName, itemQuantity, healAmount) {
	this.itemName = itemName;
	this.itemQuantity = itemQuantity;
	this.healAmount = healAmount;
}



var oranBerry = new BagItem('Oran Berry', 10, 10);
var potion = new BagItem('Potion', 7, 15);
var superPotion = new BagItem('Super Potion', 5, 20);
var hyperPotion = new BagItem('Hyper Potion', 3, 30);

var bagItemsList = [oranBerry, potion, superPotion, hyperPotion];
var myBag = new BagObj(bagItemsList);

function bag() {
	$('#dialog-message').html('Clicked bag!');
	//for (var i = 0; i < myBag.itemList.length; i++)
		//console.log(myBag.itemList[i].itemName);
}
