(function () {
  'use strict';

  angular
    .module('Shared')
    .constant('Constants', {
      Debug : true,
      ShowLoading : 'ShowLoading',
      HideLoading : 'HideLoading',
      Session     : 'Session',
      Logout      : 'Logout',
      //WebServiceURL : 'http://192.168.2.114:8181/test-page/api/',
      S3BucketName : 'xxx-resources',
      S3RegionName : 'ap-southeast-2'
    });
})();
