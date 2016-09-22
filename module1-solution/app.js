
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController ($scope) {
	$scope.input = "";
	$scope.borderColor = "transparent";

	$scope.button = function() {
		var input = $scope.input;
		countWords(input);

		if (input === "") {
			$scope.message = "Please enter data first";
			$scope.fontColor = "red";
		} else {
			var words = countWords(input);
			$scope.fontColor = "green";

			if (words <= 3) {
				$scope.message = "Enjoy!";
				$scope.borderColor = "green";
			} else {
				$scope.message = "Too much!";
				$scope.borderColor = "red";	
			}

		}
	};

}


function countWords(text) {
	var array = text.split(",");
	var result = array.length;
	return result;
}


})();
