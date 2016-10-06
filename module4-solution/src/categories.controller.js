(function() {
    'use strict'

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];

    function CategoriesController(items) {
        var controller = this;
        controller.items = items;
    }

})();
