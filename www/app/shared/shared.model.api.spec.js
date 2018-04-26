describe('APILayerFactory', function() {
  var APILayerFactory, WebServiceFactory, Constants, $rootScope;

  var RESPONSE_SUCCESS = {};
  var deferred;
  var result;
  var error;

  // Before each test load our Shared module
  beforeEach(angular.mock.module('Shared'));

  // Before each test set our injected factory (_APILayerFactory_) to our local factory variable
  beforeEach(inject(function(_APILayerFactory_, _WebServiceFactory_, _Constants_, _$q_, _$rootScope_) {
    APILayerFactory = _APILayerFactory_;
    WebServiceFactory = _WebServiceFactory_;
    Constants = _Constants_;
    $rootScope = _$rootScope_;

    deferred = _$q_.defer();

    // Initialize our local result object to an empty object before each test
    result = null;
    error = null;
  })); // beforeEach


  afterEach(function() {
    jasmine.clock().uninstall();
  }); // afterEach


  // A simple test to verify the APILayerFactory factory exists
  it('should exist', function() {
    expect(APILayerFactory).toBeDefined();
  }); // it


  describe('doLogin(username, password, business_id)', function() {
    it('should call WebServiceFactory POST AccountData/CheckLogin?business_id={business_id} to verify the user credential', function() {
      spyOn(WebServiceFactory, "sendJSONPostRequest").and.returnValue(deferred.promise);

      var username = 'test@gmail.com';
      var password = 'uboNsqiW7wrSEW0KcqnL';
      var business_id = 123;

      var path = 'AccountData/CheckLogin?business_id=' + business_id;

      var request = {
        "username" : username,
        "password" : password
      };

      APILayerFactory.doLogin(username, password, business_id)
      .then(
        function(res) {
          result = res;
        },
        function(err) {
          error = err;
        }
      );

      deferred.resolve(RESPONSE_SUCCESS);
      $rootScope.$apply();

      expect(WebServiceFactory.sendJSONPostRequest).toHaveBeenCalledWith(Constants.WebServiceURL + path, request);
      expect(error).toBe(null);
      expect(result).toEqual(RESPONSE_SUCCESS);
    }); // it
  }); // describe

}); // describe('APILayerFactory')
