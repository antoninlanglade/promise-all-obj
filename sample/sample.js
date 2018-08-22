var testObj = {
  promise1: new Promise(function(res, rej) {
    setTimeout(function () {res('p1')}, 2000)
  }),
  promise2: new Promise(function(res, rej) {
    res('p2')
  }),
  promise3: new Promise(function(res, rej) {
    setTimeout(function () {res('p3')}, 500)
  })
};

PromiseAllObj(testObj)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.log(err);
  })