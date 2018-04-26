module.exports = {
  setBoolean: function(key, value, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'setBoolean', [key, value]);
  },

  getBoolean: function(key, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'getBoolean', [key]);
  },

  setInt: function(key, value, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'setInt', [key, value]);
  },

  getInt: function(key, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'getInt', [key]);
  },

  setLong: function(key, value, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'setLong', [key, value]);
  },

  getLong: function(key, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'getLong', [key]);
  },

  setString: function(key, value, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'setString', [key, value]);
  },

  getString: function(key, callback, error) {
    cordova.exec(callback, error, 'StoragePersistent', 'getString', [key]);
  }
}
