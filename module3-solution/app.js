(function() {

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        return {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'ctrl',
            bindToController: true
        }
    }

    function NarrowItDownDirectiveController() {

    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;

        ctrl.input = "";

        ctrl.getMatchedItems = function(searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result) {
                ctrl.found = result;
            });
        }

        ctrl.removeItem = function(index) {
            MenuSearchService.removeItem(index);
        }

    }

    MenuSearchService.$inject = ['$http'];

    function MenuSearchService($http) {
        var service = this;

        service.foundItems = [];

        service.getMatchedMenuItems = function(searchTerm) {
            service.foundItems = [];
            return $http({
                method: 'GET',
                url: 'https://jayemes.github.io/coursera-angularjs/module3-solution/menu_items.json'
                    // url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function(result) {
                if (searchTerm == ""){
                    return service.foundItems;
                    console.log(service.foundItems);
                }

                var allItems = result.data.menu_items;

                for (var i = 0; i < allItems.length; i++) {
                    var item = allItems[i];
                    if (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
                        service.foundItems.push(item);
                    }
                }

                console.log("Found " + service.foundItems.length + " items!");
                return service.foundItems;
            });
        }

        service.removeItem = function(index) {
            service.foundItems.splice(index, 1);
        }


    }


})();
