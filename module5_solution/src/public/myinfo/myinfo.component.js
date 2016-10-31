(function () {
'use strict';

	angular.module('public')
		.component('menu-item', {

			templateUrl: 'src/public/myinfo/menu-item.component.html',
			bindings: {
				menuItem: '<',
			}

		})
	;


})();