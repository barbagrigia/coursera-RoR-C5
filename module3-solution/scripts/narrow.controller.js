(function () {
'use strict';

	angular.module('NarrowItDownApp')
		.controller('NarrowItDownController', NarrowItDownController)
	;

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
	  
	  //console.log("Initializing narrow.controller..");
	  var nidCtrl = this;
	  nidCtrl.showLoader = false;
	  nidCtrl.showMsg = false;
	  nidCtrl.searchTerm = '';
	  nidCtrl.founds = new Array();

	  nidCtrl.search = function () {
	  	if (nidCtrl.searchTerm != '') {

	  		nidCtrl.showLoader = true;
	  		nidCtrl.showMsg = false;

	  		var promise = MenuSearchService.getMatchedMenuItems(nidCtrl.searchTerm);

	  		promise.then(function (response) {
				nidCtrl.founds = response;
			})
		    .then(function () {
				nidCtrl.showLoader = false;
				nidCtrl.showMsg = true;
			})
		    .catch(function (error) {
		      	console.log(error);
		    })

		}
		else {
			nidCtrl.founds = new Array();
		}

	  };

	  nidCtrl.removeItem = function (itemIndex) {
	    MenuSearchService.removeItem(itemIndex);
	  };

	}

})();
