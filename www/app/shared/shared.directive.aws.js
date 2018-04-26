(function() {
  'use strict';

  angular
    .module('Shared')
    .directive('awsImg', awsImg);

  awsImg.$inject = ['$timeout', 'Constants', 'WebServiceFactory'];

  function awsImg($timeout, Constants, WebServiceFactory) {

    function link(scope, element, attrs) {
      if (WebServiceFactory.authToken == null) {
        AWS.config.update({
          accessKeyId: WebServiceFactory.tempToken.accessKeyId,
          secretAccessKey: WebServiceFactory.tempToken.secretAccessKey
        });
      } else {
        AWS.config.update({
          accessKeyId: WebServiceFactory.authToken.accessKeyId,
          secretAccessKey: WebServiceFactory.authToken.secretAccessKey,
          sessionToken: WebServiceFactory.authToken.sessionToken
        });
      }
      AWS.config.region = Constants.S3RegionName;

      var bucket = new AWS.S3({params: {Bucket: Constants.S3BucketName}});

      // watch the key variable for possible changes
      scope.$watch('key', function() {
        onKeyChanged();
      });
      onKeyChanged();

      function onKeyChanged() {
        if (scope.key == null || scope.key == "") {
          scope.s3url = '';
        }
        else {
          bucket.getObject({Key: scope.key}, function(err, file) {
            $timeout(function() {
              var image = encode(file.Body);

              // fix orientation
              var buffer = base64ToArrayBuffer(image);
              var exifData = EXIF.readFromBinaryFile(buffer);
              scope.orientation = exifData.Orientation;

              scope.s3url = 'data:image/jpeg;base64,' + image;
            }, 1);
          });
        }
      } // onKeyChanged


      function encode(data) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
          str += String.fromCharCode(data[i]);
        }
        return btoa(str);
      } // encode


      function base64ToArrayBuffer(base64) {
        var binaryString = atob(base64);
        var len = binaryString.length;
        var bytes = new Uint8Array( len );

        for (var i = 0; i < len; i++)        {
          bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes.buffer;
      } // base64ToArrayBuffer

    } // link

    return {
      restrict : 'E',
      scope : {
        key: '='
      },
      template: '<img src="{{s3url}}" class="orientation-{{orientation}}" />',
      link: link
    };
  }
})();
