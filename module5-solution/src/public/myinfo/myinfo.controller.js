(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'MenuService'];
function MyInfoController(user, MenuService) {
  var $ctrl = this;

  $ctrl.userInfo = user;

  MenuService.getItem($ctrl.userInfo.favorite).then(function (response) {
    $ctrl.item = response;
  });

};

})();
