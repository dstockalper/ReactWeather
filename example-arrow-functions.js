var names = ['Doug', 'Erin', 'Remy', 'Charley'];

// // Standard JS (forEach fcn is available to arrays)
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// // ES6 Arrow Functions (can be used in place of anonymous function)
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// // Why use arrow function?  Can be shortened even further with no curly braces and no return word
// names.forEach((name) => console.log(name));

// return value is on the right
// var returnMe = (name) => name + '!';
// console.log(returnMe('Doug'));

// Major diff bt anonymous fcn and arrow fcn:
// Anon fcns have a "this" binding
// Arrow fcns take on their parents "this" binding

// var person = {
//   name: 'Doug',
//   greet: function() {
//     names.forEach(function(name){
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
//
// person.greet();
// // returns undefined says hi to 'Doug', undefined says hi to 'Erin', etc.
//
// var person_arrow = {
//   name: 'Doug',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says arrow hi to ' + name)
//     });
//   }
// }
//
// person_arrow.greet();
// // returns undefined says hi to 'Doug', undefined says hi to 'Erin', etc.


// Challenge AREA
function add(a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(3, 11));
console.log(addStatement(22, 0));

var addExpression = (a, b) => a + b;


console.log(addExpression(2, 8));
console.log(addExpression(41, 0));
