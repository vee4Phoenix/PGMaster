/*
    Class: WebService

    Example for instantiating a class and calling a method:
        WebService.sendJSONGetRequest(url, callback, error);
*/

(function () {
  'use strict';

  angular
    .module('Shared')
    .factory('WebServiceFactory', WebServiceFactory); // WebServiceFactory

  WebServiceFactory.$inject = ['$q', '$http', 'Constants'];

  function WebServiceFactory($q, $http, Constants) {
    // Use x-www-form-urlencoded Content-Type
    //$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    /*
    var serialize = function(obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

      for(name in obj) {
        value = obj[name];

        // Array
        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += serialize(innerObj) + '&';
          }
        }

        // Object
        else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += serialize(innerObj) + '&';
          }
        }

        // Other type
        else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      } // for (name in obj)

      return query.length ? query.substr(0, query.length - 1) : query; // string the last '&'
    }; // serialize

    // Override $http service's default transformRequest
    $http.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? serialize(data) : data;
    }];
    */

    return {

      /*
       * Default Error function
       */
      defaultError : function(e) {
        console.log(angular.toJson(e));
      },

      /*
       * Default Callback function
       */
      defaultCallback : function(response) {
        console.log(angular.toJson(response));
      },


      /*
       * A function to send a JSON GET Request
       */
      sendJSONGetRequest : function(url) {
        if (Constants.Debug) {
          console.log('Invoking WebServiceFactory.sendJSONGetRequest : ' + url);
        }

        var deferred = $q.defer();
        var headers = {};

        $http.get(url, {
          headers : headers
        }).then(
          function(response) {
            if (Constants.Debug) {
              console.log('WebServiceFactory.sendJSONGetRequest response: ');
              console.log(angular.toJson(response.data));
            }
            deferred.resolve(response.data);
          },
          deferred.reject
        );

        return deferred.promise;
      },

      /*
       * A function to send a JSON POST Request
       */
      sendJSONPostRequest : function(url, request) {
        if (Constants.Debug) {
          console.log('Invoking WebServiceFactory.sendJSONPostRequest : ' + url);
          console.log('Param: ', angular.toJson(request));
        }

        var deferred = $q.defer();
        var headers = {};

        $http.post(url, request, {
          headers : headers
        }).then(
          function(response) {
            if (Constants.Debug) {
              console.log('WebServiceFactory.sendJSONPostRequest response: ');
              console.log(angular.toJson(response.data));
            }
            deferred.resolve(response.data);
          },
          deferred.reject
        );

        return deferred.promise;
      },

      /*
       * A function to send a JSON PUT Request
       */
      sendJSONPutRequest : function(url, request) {
        if (Constants.Debug) {
          console.log('Invoking WebServiceFactory.sendJSONPutRequest : ' + url);
          console.log('Param: ', angular.toJson(request));
        }

        var deferred = $q.defer();
        var headers = {};

        $http.put(url, request, {
          headers : headers
        }).then(
          function(response) {
            if (Constants.Debug) {
              console.log('WebServiceFactory.sendJSONPutRequest response: ');
              console.log(angular.toJson(response.data));
            }
            deferred.resolve(response.data);
          },
          deferred.reject
        );

        return deferred.promise;
      },

      /*
       * A function to send a JSON DELETE Request
       */
      sendJSONDeleteRequest : function(url) {
        if (Constants.Debug) {
          console.log('Invoking WebServiceFactory.sendJSONDeleteRequest : ' + url);
        }

        var deferred = $q.defer();
        var headers = {};

        $http.delete(url, {
          headers : headers
        }).then(
          function(response) {
            if (Constants.Debug) {
              console.log('WebServiceFactory.sendJSONDeleteRequest response: ');
              console.log(angular.toJson(response.data));
            }
            deferred.resolve(response.data);
          },
          deferred.reject
        );

        return deferred.promise;
      },

      /*
       * A function to send a SOAP Request
       */
      sendSoapRequest : function(url, action, envelope) {
        if (Constants.Debug) {
          console.log('Invoking WebServiceFactory.sendSoapRequest');
          console.log('URL : ' + url);
          console.log('action : ' + action);
          console.log('envelope : ' + envelope);
        }

        var deferred = $q.defer();

        $http.post(url, envelope, {
          headers: {
            'Content-Type' : 'text/xml; charset=utf-8',
            'SoapAction' : action
          }
        }).then(
          function(response) {
            if (Constants.Debug) {
              console.log('WebServiceFactory.sendSoapRequest response: ');
              console.log(response.data);
            }
            deferred.resolve(response.data);
          },
          deferred.reject
        );

        return deferred.promise;
      } // sendSoapRequest

    };
  }
})();
