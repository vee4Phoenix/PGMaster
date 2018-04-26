(function() {
  'use strict';

  angular
    .module('Shared')
    .directive('stringToInt', StringToInt)
    .directive('stringToDouble', StringToDouble)
    .directive('stringToDate', StringToDate);

  function StringToInt() {
    return {
      require : 'ngModel',
      restrict : 'A',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(val) {
          return parseInt(val, 10) || 0;
        });
        ngModel.$formatters.push(function (val) {
          return '' + val;
        });
      }
    };
  }

  function StringToDouble() {
    return {
      require : 'ngModel',
      restrict : 'A',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(val) {
          return parseFloat(val, 10) || 0;
        });
        ngModel.$formatters.push(function (val) {
          return '' + val;
        });
      }
    };
  }

  StringToDate.$inject = ['$filter'];

  function StringToDate($filter) {
    return {
      require : 'ngModel',
      restrict : 'A',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(val) {
          return $filter('date')(val, 'yyyy-MM-dd');
        });
        ngModel.$formatters.push(function (val) {
          return new Date(val);
        });
      }
    };
  }

})();
