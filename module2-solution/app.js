(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var myService = ShoppingListCheckOffService;

        this.toBuyList = myService.getToBuyList();

        this.buyItem = function(itemIndex) {
            myService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var myService = ShoppingListCheckOffService;

        this.boughtList = myService.getBoughtList();
    }

    function ShoppingListCheckOffService() {
        var initialList = [
            { name: "Bread", quantity: "2 loafs" },
            { name: "Beef", quantity: "1 pound" },
            { name: "Tuna", quantity: "5 cans" },
            { name: "Beer", quantity: "10 six-packs" },
            { name: "Ham", quantity: ".8 pounds" },
            { name: "Cheese", quantity: "1 wheel" }
        ];

        var toBuyList = initialList;

        var boughtList = [];

        this.buyItem = function(itemIndex) {
            boughtList.push(toBuyList[itemIndex]);
            toBuyList.splice(itemIndex, 1);
        }

        this.getToBuyList = function() {
            return toBuyList;
        }

        this.getBoughtList = function() {
            return boughtList;
        }
    }

})();
