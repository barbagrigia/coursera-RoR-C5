(function () {
"use strict";

angular.module('common')
.directive('dbCheck', DbCheckDirective);

DbCheckDirective.$inject = ['MenuService', '$q'];
function DbCheckDirective ( MenuService, $q ) {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.favorite = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return $q.when();
        };
        return MenuService.getItem(modelValue);
      }
    }
  };
};

})();
