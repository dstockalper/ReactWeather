// Callback syntax
function getTempCallback(location, callback) {
  callback(undefined, 78);  // run callback with good params
  callback('city not found');  //  run callback with bad param
}

getTempCallback('Philadelphia', function(err, temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});


// Promise syntax
// Alleviates possibility of success and failure callbacks running as above (this is weird)
function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found.');
    }, 1000) // Simulate delay from API
    // only resolve or reject can be called; not both and not either one twice (unlike in callbacks)
  });
}

getTempPromise('Philadelphia').then(function(temp) { //success case
  console.log('promise success', temp);
}, function(err) { // err case
  console.log('promise error', err)
});
// Notice two separate functions for success and err


// typeof() === 'number'
// Challenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
      resolve(a + b);
    } else {
      reject('a and b need to be numbers');
    }
  });
};

addPromise(3, 4).then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});

addPromise(3, 'junk').then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});
