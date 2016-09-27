(function () {
'use strict';

	angular.module('NarrowItDownApp')
		.service('MenuSearchService', MenuSearchService)
	;

	MenuSearchService.$inject = ['$http', 'ApiBasePath']
	function MenuSearchService($http, ApiBasePath) {
		//console.log("Initializing menusearch.service..");
	  	var service = this;
	  	var found;

		service.getMatchedMenuItems = function(searchTerm) {

			found = new Array();

		    return $http({
		      	method: "GET",
		      	url: (ApiBasePath + "/menu_items.json")
		    })
		    .then(function (result) {

			    // process result and only keep items that match
			    var foundItems = result.data.menu_items;

			    angular.forEach(foundItems, function(value, key) {
					if (value.description.includes(searchTerm)) {
						found.push(value);
					}
				});

			    // return processed items
			    return found;

			})
		    .catch(function (error) {
			    console.log(error);
		    });

		};

		service.removeItem = function (itemIndex) {
	    	found.splice(itemIndex, 1);
	  	};
	}
  
})();
