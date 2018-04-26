(function() {
  'use strict';

  angular
    .module('Shared')
    .controller('GlobalController', GlobalController);

  GlobalController.$inject = ['$scope', '$location', 'Constants', 'APILayerFactory', 'GlobalFactory', 'ScheduleConstants', 'ScheduleFactory', 'WebServiceFactory'];
  function GlobalController($scope, $location, Constants, APILayerFactory, GlobalFactory, ScheduleConstants, ScheduleFactory, WebServiceFactory)
  {
    var controller = this;
    controller.business = GlobalFactory.business;

    // Loading dialog
    controller.isLoading = false;
    $scope.$on(Constants.ShowLoading, function() { controller.isLoading = true;  });
    $scope.$on(Constants.HideLoading, function() { controller.isLoading = false; });
    $scope.$on(Constants.Logout, function()      { controller.doLogout(); });

    controller.onBack = function() {
      setTimeout(function() {
        window.history.back();
      },100);
    };

    controller.isBackButtonVisible = function() {
      return $location.path() != '/';
    };
  }
})();
