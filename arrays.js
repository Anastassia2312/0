"use strict";
let arr = new Array();
let array = [];

let arrOne = ["Anastasia", "Tymur", "Mike"];

arrOne[3] = "Erika";
console.log(arrOne);

arrOne.push("Emily");
console.log(arrOne);

//Method shift() deletes 1 element of array
arrOne.shift();
console.log(arrOne);

//Method pop() deletes last element of array
arrOne.pop();
console.log(arrOne);

//Method unshift() adds elements to array
arrOne.unshift("Anastasia", "Ivan");
console.log(arrOne);

//Method splice. Can add, delete or replace elements
const arrTwo = ["345", "821", "338", "696", "870", "589"];
let removed = arrTwo.splice(1, 1);
console.log(arrTwo);

arrTwo.splice(3, 1, "Vasya");
console.log(arrTwo);

//concat and slice
const my = ["a", "b", "c"];
let you = my.concat("d", "e");
console.log(you);

//Method reverse changes order of elements
my.reverse();
console.log(my);

//Method map
const teenager = [13, 14, 15, 16, 17, 18];
let teenagerResult = teenager.map((teen) => teen[1]);
console.log(teenagerResult);

//Method forEach
teenager.forEach((age, index, array) =>
  console.log(`${age} is that index ${index} of this array ${array}`)
);

//Method reduce

const reduce = teenager.reduce((previousValue, age) => {
  return previousValue + age;
}, 0);

console.log(reduce);
