(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['serverMenuService'];
function SignupController(serverMenuService) {

  	var ctrl = this;

  	ctrl.favDish = '';
  	ctrl.errorResponse = '';
  	ctrl.menuItem = '';

  	ctrl.firstname = '';
  	ctrl.lastname = '';
  	ctrl.email = '';
  	ctrl.phonenumber = '';

  	ctrl.submit = function() {

  		//console.log(ctrl.firstname);
  		//console.log(ctrl.lastname);
  		//console.log(ctrl.email);
  		//console.log(ctrl.phonenumber);

  		var promise = serverMenuService.getFavouriteMenuItem(ctrl.favDish);

  		promise.then(function (response) {
			ctrl.menuItem = response;
			//console.log(ctrl.menuItem);
		})
		.then(function () {
			if (ctrl.menuItem.status == 500 && ctrl.menuItem.statusText == "Internal Server Error") {
		    	ctrl.errorResponse = 'No such ' + ctrl.favDish + ' menu number exists';
		    }
		    else {
		    	serverMenuService.storeFavourireMenuItem(ctrl.menuItem);
		    	serverMenuService.storeUserData(ctrl.firstname, ctrl.lastname, ctrl.email, ctrl.phonenumber);
		    	serverMenuService.reg();

		    	ctrl.firstname = '';
			  	ctrl.lastname = '';
			  	ctrl.email = '';
			  	ctrl.phonenumber = '';
			  	ctrl.favDish = '';

			  	

		    	ctrl.errorResponse = 'Your information has been saved';
		    }
		})
	    .catch(function (error) {
	      	console.log(error);
	    })

	    ;

  		//console.log(ctrl.menuItem);
  	};
}

})();
