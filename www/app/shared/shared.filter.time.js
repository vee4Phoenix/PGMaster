(function() {
  'use strict';

  angular
    .module('Shared')
    .filter('millisecondsToHours', millisecondsToHours);

  function millisecondsToHours() {
    return function(input) {
      function z(n) { return (n < 10 ? '0' : '') + n; }
      input *= 0.001;
      var seconds = input % 60;
      var minutes = Math.floor(input % 3600 / 60);
      var hours = Math.floor(input / 3600);
      //return (z(hours) + ':' + z(minutes) + ':' + z(seconds));
      return (z(hours) + ':' + z(minutes));
    };
  }
})();
