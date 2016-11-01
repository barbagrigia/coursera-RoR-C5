(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var SignUpCtrl = this;

  SignUpCtrl.submit = function () {
    SignUpService.saveUser(SignUpCtrl.user);
    console.log(SignUpCtrl.user);
    SignUpCtrl.completed = true;
  };
}

})();
