(function() {
    angular.module('MenuApp')
        .component("menuItems", {
            templateUrl: 'src/templates/menuitems-component.template.html',
            bindings: {
                items: '<'
            }
        });
})();
