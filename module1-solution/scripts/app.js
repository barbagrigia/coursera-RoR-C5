(function () {
'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.dishes = "";
		$scope.message = "";
		$scope.classVar = "";

		$scope.ckeckToMuchDishes = function() {

			var dishes;

			if ($scope.dishes.trim() == "") {
				$scope.message = "Please enter data first";
				$scope.classVar = 'red';
			}

			else {
				dishes = $scope.dishes.split(',');

				$scope.classVar = 'green';

				if (dishes.length <= 3) {
					$scope.message = 'Enjoy!';
				}
				else {
					$scope.message = 'Too much!';
				}
			}
		}
	}
})();
