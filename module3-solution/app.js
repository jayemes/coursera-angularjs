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

        this.input = "";

        this.found = [{
            name: "Name",
            short_name: "Short Name",
            description: "Description"
        }]

        this.getMatchedItems = function(searchTerm) {
            this.found = MenuSearchService.getMatchedMenuItems(searchTerm);
        }

    }

    MenuSearchService.$inject = ['$http'];

    function MenuSearchService($http) {

        this.getMatchedMenuItems = function(searchTerm) {
            var response = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            })

            response.then(function(result) {
                var allItems = result.data.menu_items;
                var foundItems = [];

                for (var i = 0; i < allItems.length; i++) {
                    var item = allItems[i];
                    if (item.description.indexOf(searchTerm.toLowerCase()) != -1) {
                        foundItems.push(item);
                    }
                }

                console.log("Found " + foundItems.length + " items!");
                return foundItems

            })

        }
    }







})();
