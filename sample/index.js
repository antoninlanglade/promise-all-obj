var transformObjtoArr = function (obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

var PromiseAllObj = function (obj) {
  return new Promise(function(res, rej) {
    var arr = transformObjtoArr(obj);
    Promise.all(arr)
      .then(function (results) {
        var count = 0;
        var response = {};
        for (var key in obj) {
          response[key] = results[count];
          count++;
        }
        res(response);
      })
      .catch(function(err) {
        rej(new Error(err))
      })
  })
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = PromiseAllObj;
}
else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return PromiseAllObj;
    });
  }
  else {
    window.PromiseAllObj = PromiseAllObj;
  }
}