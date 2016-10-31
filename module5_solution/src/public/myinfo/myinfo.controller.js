(function () {
    "use strict";
    angular.module('public').controller('MyinfoController', MyinfoController);
    MyinfoController.$inject = ['serverMenuService'];

    function MyinfoController(serverMenuService) {
        var ctrl = this;
        ctrl.isRegistered = serverMenuService.isRegistered();
        ctrl.serverPath = serverMenuService.serverPath;
        ctrl.menuItem = serverMenuService.getFavourireMenuItem();
        ctrl.userData = serverMenuService.getUserData();
        //console.log(ctrl.serverPath);
    }
})();