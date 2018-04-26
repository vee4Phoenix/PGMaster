describe("TemplateController", function() {
  var $controller, TemplateController;

  beforeEach(angular.mock.module('Shared'));
  beforeEach(angular.mock.module('Template'));

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    var $scope = _$rootScope_.$new();

    TemplateController = $controller('TemplateCtrl', { $scope : $scope });
  }));


  // A simple test to verify the TemplateFactory factory exists
  it('should exist', function() {
    expect(TemplateController).toBeDefined();
  });


  // TODO: test routing
});
