(function() {

    angular.module('public').controller('RegistrationController', ['MenuService', 'RegistrationService', function(MenuService, RegistrationService) {

        var reg = this;

        reg.favoriteMiss = false;

        reg.submit = function() {
            var status = MenuService.getItem(reg.user.favorite);

            status.then(function(response) {
                if (response.status == 200) {
                    reg.favoriteMiss = false;
                    RegistrationService.registerUser(reg.user);
                    RegistrationService.savedInfo = true;
                } else {
                    reg.favoriteMiss = true
                    RegistrationService.savedInfo = false;
                }
                reg.savedInfo = RegistrationService.savedInfo;
            });
        }


    }])


})();
