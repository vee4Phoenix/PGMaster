describe("TemplateFactory", function() {
  var TemplateFactory;

  // Before each test load our module
  beforeEach(angular.mock.module('Shared'));
  beforeEach(angular.mock.module('Template'));

  beforeEach(inject(function(_TemplateFactory_) {
    TemplateFactory = _TemplateFactory_;
  }));

  // A simple test to verify the TemplateFactory factory exists
  it('should exist', function() {
    expect(TemplateFactory).toBeDefined();
  });


});
