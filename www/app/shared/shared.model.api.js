
(function () {
  'use strict';

  angular
    .module('Shared')
    .factory('APILayerFactory', APILayerFactory); // APILayerFactory

  APILayerFactory.$inject = ['$filter', 'Constants', 'WebServiceFactory'];

  function APILayerFactory($filter, Constants, WebServiceFactory) {

    return {

      doLogin: function(username, password, business_id) {
        var path = 'AccountData/CheckLogin?business_id=' + business_id;
        var request = {
          "username" : username,
          "password" : password
        };
        return WebServiceFactory.sendJSONPostRequest(Constants.WebServiceURL + path, request);
      }
      
    };
  }
})();
