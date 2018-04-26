(function() {
  'use strict';

  angular
    .module('Shared')
    .factory('CacheFactory', CacheFactory);

  CacheFactory.$inject = ['$cacheFactory'];

  function CacheFactory($cacheFactory) {
    return $cacheFactory('super-cache');
  }
})();
