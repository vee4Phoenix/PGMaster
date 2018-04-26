describe('WebServiceFactory', function() {
  var WebServiceFactory, Constants, $q, $httpBackend;

  var REQUEST = {};
  var RESPONSE_SUCCESS = {};
  var result;
  var error;
  var statuses = [400, 401, 404, 500];

  // Before each test load our Shared module
  beforeEach(angular.mock.module('Shared'));

  // Before each test set our injected factory (_WebServiceFactory_) to our local factory variable
  beforeEach(inject(function(_WebServiceFactory_, _Constants_, _$q_, _$httpBackend_) {
    WebServiceFactory = _WebServiceFactory_;
    Constants = _Constants_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;

    // Initialize our local result object to an empty object before each test
    result = null;
    error = null;
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  // A simple test to verify the WebFactory factory exists
  it('should exist', function() {
    expect(WebServiceFactory).toBeDefined();
  });


  xdescribe('sendJSONGetRequest(url)', function() {
    var handler;
    var path;

    beforeEach(function() {
      // Spy on our service call but allow it to continue to its implementation
      spyOn(WebServiceFactory, "sendJSONGetRequest").and.callThrough();

      path = 'Calendar/Secured/Class/ListCalendarClass/1/2016-02-02/2018-02-02';
      handler = $httpBackend.whenGET(Constants.WebServiceURL + path).respond(200, $q.when(RESPONSE_SUCCESS));
    });


    it('should be able to send JSON GET request', function() {
      $httpBackend.expectGET(Constants.WebServiceURL + path);

      WebServiceFactory.sendJSONGetRequest(Constants.WebServiceURL + path)
      .then(
        function(res) {
          result = res;
        },
        function(err) {
          error = err;
        }
      );

      $httpBackend.flush();

      expect(error).toBe(null);
      expect(result).toEqual(RESPONSE_SUCCESS);
    });


    it('should return an error when http response is not 200', function() {
      for (var i = 0; i < statuses.length; i++) {
        var status = statuses[i];
        handler.respond(status);

        $httpBackend.expectGET(Constants.WebServiceURL + path);

        WebServiceFactory.sendJSONGetRequest(Constants.WebServiceURL + path)
        .then(
          function(res) {
            result = res;
          },
          function(err) {
            error = err;
          }
        );

        $httpBackend.flush();

        expect(result).toBe(null);
        expect(error.status).toEqual(status);
      }
    });

  });


  xdescribe('sendJSONPostRequest(url, request)', function() {
    var handler;
    var path;

    beforeEach(function() {
      // Spy on our service call but allow it to continue to its implementation
      spyOn(WebServiceFactory, "sendJSONPostRequest").and.callThrough();

      path = 'AccountData/CheckLogin?business_id=1';
      handler = $httpBackend.whenPOST(Constants.WebServiceURL + path, REQUEST).respond(200, $q.when(RESPONSE_SUCCESS));
    });


    it('should be able to send JSON POST request', inject(function($rootScope) {
      $httpBackend.expectPOST(Constants.WebServiceURL + path, REQUEST);

      WebServiceFactory.sendJSONPostRequest(Constants.WebServiceURL + path, REQUEST)
      .then(
        function(res) {
          result = res;
        },
        function(err) {
          error = err;
        }
      );

      $httpBackend.flush();

      expect(error).toBe(null);
      expect(result).toEqual(RESPONSE_SUCCESS);
    }));


    it('should return an error when http response is not 200', function() {
      for (var i = 0; i < statuses.length; i++) {
        var status = statuses[i];
        handler.respond(status);

        $httpBackend.expectPOST(Constants.WebServiceURL + path, REQUEST);

        WebServiceFactory.sendJSONPostRequest(Constants.WebServiceURL + path, REQUEST)
        .then(
          function(res) {
            result = res;
          },
          function(err) {
            error = err;
          }
        );

        $httpBackend.flush();

        expect(result).toBe(null);
        expect(error.status).toEqual(status);
      }
    });
  });


  xdescribe('sendJSONPutRequest(url, request)', function() {
    var handler;
    var path;

    beforeEach(function() {
      // Spy on our service call but allow it to continue to its implementation
      spyOn(WebServiceFactory, "sendJSONPutRequest").and.callThrough();

      path = 'Calendar/Secured/326/ClassEventBooking/lock';
      handler = $httpBackend.whenPUT(Constants.WebServiceURL + path, REQUEST).respond(200, $q.when(RESPONSE_SUCCESS));
    });


    it('should be able to send JSON PUT request', inject(function($rootScope) {
      $httpBackend.expectPUT(Constants.WebServiceURL + path, REQUEST);

      WebServiceFactory.sendJSONPutRequest(Constants.WebServiceURL + path, REQUEST)
      .then(
        function(res) {
          result = res;
        },
        function(err) {
          error = err;
        }
      );

      $httpBackend.flush();

      expect(error).toBe(null);
      expect(result).toEqual(RESPONSE_SUCCESS);
    }));


    it('should return an error when http response is not 200', function() {
      for (var i = 0; i < statuses.length; i++) {
        var status = statuses[i];
        handler.respond(status);

        $httpBackend.expectPUT(Constants.WebServiceURL + path, REQUEST);

        WebServiceFactory.sendJSONPutRequest(Constants.WebServiceURL + path, REQUEST)
        .then(
          function(res) {
            result = res;
          },
          function(err) {
            error = err;
          }
        );

        $httpBackend.flush();

        expect(result).toBe(null);
        expect(error.status).toEqual(status);
      }
    });
  });


  xdescribe('sendJSONDeleteRequest(url)', function() {
    var handler;
    var path;

    beforeEach(function() {
      // Spy on our service call but allow it to continue to its implementation
      spyOn(WebServiceFactory, "sendJSONDeleteRequest").and.callThrough();

      path = 'Calendar/Secured/355/ClassEventWaitingList/7/10';
      handler = $httpBackend.whenDELETE(Constants.WebServiceURL + path).respond(200, $q.when(RESPONSE_SUCCESS));
    });


    it('should be able to send JSON DELETE request', inject(function($rootScope) {
      $httpBackend.expectDELETE(Constants.WebServiceURL + path);

      WebServiceFactory.sendJSONDeleteRequest(Constants.WebServiceURL + path)
      .then(
        function(res) {
          result = res;
        },
        function(err) {
          error = err;
        }
      );

      $httpBackend.flush();

      expect(error).toBe(null);
      expect(result).toEqual(RESPONSE_SUCCESS);
    }));


    it('should return an error when http response is not 200', function() {
      for (var i = 0; i < statuses.length; i++) {
        var status = statuses[i];
        handler.respond(status);

        $httpBackend.expectDELETE(Constants.WebServiceURL + path);

        WebServiceFactory.sendJSONDeleteRequest(Constants.WebServiceURL + path)
        .then(
          function(res) {
            result = res;
          },
          function(err) {
            error = err;
          }
        );

        $httpBackend.flush();

        expect(result).toBe(null);
        expect(error.status).toEqual(status);
      }
    });
  });


  xdescribe('sendSoapRequest()', function() {
    /*
    it('should be able to send Soap request', inject(function($rootScope) {
    }));
    */
  });
});
