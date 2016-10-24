(function() {

    angular.module('public').controller('InfoController', ['MenuService', 'RegistrationService', function(MenuService, RegistrationService) {

        var info = this;
        info.user = RegistrationService.user;
        info.savedInfo = RegistrationService.getSavedInfo();


        if (info.user) {
            MenuService.getItem(info.user.favorite).then(function(response) {
                info.favoriteItem = response.data;
            });
        }


    }])


})();
