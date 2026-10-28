(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('angularDollars', AngularDollarsFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.totalPrice = function (item) {
    return item.quantity * item.pricePerItem;
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // Items still to buy
  var toBuyItems = [
    { name: "cookies", quantity: 10, pricePerItem: 2 },
    { name: "bottles of milk", quantity: 2, pricePerItem: 3.49 },
    { name: "loaves of bread", quantity: 1, pricePerItem: 2.99 },
    { name: "apples", quantity: 6, pricePerItem: 0.75 },
    { name: "bags of chips", quantity: 3, pricePerItem: 4.25 }
  ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1)[0];
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

function AngularDollarsFilter() {
  return function (input) {
    input = Number(input) || 0;
    return "$$$" + input.toFixed(2);
  };
}

})();
