(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


// SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService() {
  var service = this;
  var user = "";

  service.saveUser = function (userInfo) {
    user = userInfo;
  }

  service.getUser = function () {
    return user;
  };
  
};

})();
