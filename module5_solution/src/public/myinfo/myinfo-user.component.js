(function () {
'use strict';

	angular.module('public')
		.component('user', {

			templateUrl: 'src/public/myinfo/menu-item-user.component.html',
			bindings: {
				userData: '<'
			}

		})
	;


})();