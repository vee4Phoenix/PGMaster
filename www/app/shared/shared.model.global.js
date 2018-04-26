(function() {
  'use strict';

  angular
    .module('Shared')
    .factory('GlobalFactory', GlobalFactory);

  GlobalFactory.$inject = ['$location'];

  function GlobalFactory($location)
  {
    return {
      meta : { title : '' },


      setPath : function(path) {
        $location.path(path);
      },


      /*
       * Identifies devices based on the screen width.
       * returns boolean value
       */
      isPhone : function() {
        return window.matchMedia('screen and (max-width: 599px) and (orientation: portrait)').matches ||
               window.matchMedia('screen and (max-height: 599px) and (orientation: landscape)').matches;
      },

      isPhablet : function() {
        return window.matchMedia('screen and (min-width: 600px) and (max-width: 767px)').matches;
      },

      isTablet : function() {
        return window.matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches;
      },

      isDesktop : function() {
        return window.matchMedia('screen and (min-width: 1024px)').matches;
      },


      /*
       * Detect retina display
       * returns boolean value
       */
      isRetina : function() {
        return window.matchMedia('screen and (-webkit-min-device-pixel-ratio: 2)').matches;
      }
    };
  }
})();
