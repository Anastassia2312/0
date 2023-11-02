/*"use strict";
function getEvenNumbers(start, end) {
  let evenNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers(3, 3));

console.log(getEvenNumbers(3, 12));*/

function checkStorage(storage, item) {
  const itemToLowerCase = item.toLowerCase();
  if (storage.includes(itemToLowerCase)) {
    return `${itemToLowerCase} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
