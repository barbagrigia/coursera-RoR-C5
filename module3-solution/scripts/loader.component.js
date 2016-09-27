(function () {
'use strict';

	angular.module('LoaderApp')
		.component('itemsLoaderIndicator', {
			templateUrl: 'loader/itemsloaderindicator.template.html',
			controller: loaderComponentController,
			bindings: {
				showLoader: '<'
			}
		})
	;

	loaderComponentController.$inject = ['$scope'];
	function loaderComponentController($scope) {
		var $ctrl = this;

		//console.log('Initializing loader.component..');
	}

})();
