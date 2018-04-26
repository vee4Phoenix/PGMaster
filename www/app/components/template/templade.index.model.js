(function () {
  'use strict';

  angular
    .module('Template')
    .factory('TemplateFactory', TemplateFactory);

  TemplateFactory.$inject = [];

  function TemplateFactory()
  {
    return {

      doSomething: function(input) {
        return input;
      }

    };
  }
})();
