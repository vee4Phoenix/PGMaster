module.exports = {
  saveReflection: function(reflection, callback, error) {
    cordova.exec(callback, error, 'DatabasePlugin', 'saveReflection', [reflection]);
  },
  getReflections: function(sectionId, callback, error) {
    cordova.exec(callback, error, 'DatabasePlugin', 'getReflections', [sectionId]);
  },
  getAllReflections: function(callback, error) {
    cordova.exec(callback, error, 'DatabasePlugin', 'getAllReflections', []);
  }
}
