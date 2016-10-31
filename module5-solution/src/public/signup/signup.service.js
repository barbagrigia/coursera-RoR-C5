(function () {
    'use strict';
    angular.module('public').service('serverMenuService', serverMenuService);
    serverMenuService.$inject = ['$http', 'serverPath']

    function serverMenuService($http, serverPath) {
        //console.log("Initializing menudata.service..");
        var service = this;
        service.serverPath = serverPath;
        service.registered = false;
        service.storeService;
        service.userdata = {};
        service.getFavouriteMenuItem = function (menuItemShortName) {
            return $http({
                method: "GET"
                , url: (serverPath + "/menu_items/" + menuItemShortName + ".json")
            }).then(function (result) {
                // return processed items
                return result.data;
            }).catch(function (error) {
                console.log(error);
                return error;
            });
        };
        service.storeFavourireMenuItem = function (menuItemObject) {
            service.storeService = menuItemObject;
            //console.log(service.storeService);
        };
        service.storeUserData = function (fname, lname, email, pnumber) {
            service.userdata.fname = fname;
            service.userdata.lname = lname;
            service.userdata.email = email;
            service.userdata.pnumber = pnumber;
        };
        service.reg = function () {
            service.registered = true;
        };
        service.isRegistered = function () {
            return service.registered;
        };
        service.getFavourireMenuItem = function () {
            return service.storeService;
        };
        service.getUserData = function () {
            return service.userdata;
        };
    }
})();