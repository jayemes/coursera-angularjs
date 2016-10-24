(function() {
    "use strict";

    angular.module('common').service('RegistrationService', [function() {

        var service = this;

        service.savedInfo = false;

        service.registerUser = function(user) {
            service.user = user;
        }

        service.getUser = function () {
          return service.user;
        }

        service.getSavedInfo = function () {
            return service.savedInfo;
        }

    }])

})();
