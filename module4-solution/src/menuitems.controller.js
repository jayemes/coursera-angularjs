(function() {
    'use strict'

    angular.module('MenuApp')
        .controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['items'];

    function MenuItemsController(items) {
    	var controller = this;
    	controller.items = items.menu_items;
    	controller.category = items.category.name;
    }

})();
