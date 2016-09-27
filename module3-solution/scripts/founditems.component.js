(function () {
'use strict';

	angular.module('NarrowItDownApp')
		.component('foundItems', {
			templateUrl: 'foundItems.html',
			controller: foundItemsComponentController,
			bindings: {
				foundItems: '<',
				onRemove: '&',
				showMsg: '<'
			}
		});

	foundItemsComponentController.$inject = ['$scope'];
	function foundItemsComponentController($scope) {
		var $ctrl = this;
		$ctrl.remove = function (myIndex) {
		    $ctrl.onRemove({ index: myIndex });
		};
		//console.log('Initializing founditems.component..');
	}
  
})();
