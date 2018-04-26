(function () {
  'use strict';

  angular
    .module('Template')
    .controller('TemplateCtrl', TemplateController);

  TemplateController.$inject = [ '$scope', 'GlobalFactory', 'TemplateFactory'];

  function TemplateController($scope, GlobalFactory, TemplateFactory)
  {
    var controller = this;

    controller.attribute = '';


    controller.doSomething = function(input) {
      return TemplateFactory.doSomething(input);
    };


    controller.onTodayClicked();
  }

})();
