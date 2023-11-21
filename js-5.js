"use strict";
function add(a, b) {
  return a + b;
}

function func(a, b, callback) {
  console.log("this is a function");
  return callback(a, b);
}

console.log(func(4, 6, add));
