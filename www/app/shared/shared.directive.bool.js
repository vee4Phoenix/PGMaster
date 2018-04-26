(function() {
  'use strict';

  angular
    .module('Shared')
    .directive('booleanToNumber', BooleanToNumber);

  function BooleanToNumber() {
    return {
      require : 'ngModel',
      restrict : 'A',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(val) {
          return val ? 1 : 0;
        });
        ngModel.$formatters.push(function (val) {
          return val == 1;
        });
      }
    };
  }
})();
