console.log(global === this);
console.log(module === this);
console.log(module.exports === this);

this.digaOi = function () {
  console.log('Oi!!!');
}

// module.exports.digaOi = function () {
//   console.log('Oi com module exports!!!');
// }