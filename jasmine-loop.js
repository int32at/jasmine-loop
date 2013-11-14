;(function () {
  window.runInLoop = function(array, callback) {
    for (var i = array.length - 1; i >= 0; i--) {
      var object = array[i];
      callback.apply(null, [object]);
    }
  };
}());