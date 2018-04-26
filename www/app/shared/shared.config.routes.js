(function () {
  'use strict';

  angular
    .module('Shared')
    .config(SharedConfig);

  SharedConfig.$inject = [ '$routeProvider', 'Constants' ];

  function SharedConfig($routeProvider, Constants) {
    $routeProvider
      // home page
      .when(Constants.PATH_INDEX, {
        templateUrl : 'app/components/template/template.index.view.html',
        css : 'template/template.index.view.css',
        controller : 'TemplateCtrl',
        controllerAs : 'controller'
      })

      .otherwise({
        redirectTo: Constants.PATH_INDEX
      });
  }

})();
