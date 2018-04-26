(function() {
  'use strict';

  angular
    .module('Shared')
    .controller('GenericDialogController', GenericDialogController);

  GenericDialogController.$inject = ['$scope', '$uibModalInstance'];
  function GenericDialogController($scope, $uibModalInstance)
  {
    var controller = this;
    controller.uibModalInstance = $uibModalInstance;
  }
})();
