describe('MillisecondsToHours filter', function() {
  var $filter;

  // Before each test load our Shared module
  beforeEach(angular.mock.module('Shared'));


  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
  }));


  describe('millisecondsToHours', function() {
    it('should convert milliseconds to hours', function() {
      var millisecondsToHours = $filter('millisecondsToHours');
      expect(millisecondsToHours(3600000)).toEqual('01:00');
    });
  });
  
});
