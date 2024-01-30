// Write a function that takes in two arrays of numbers and returns the sum of the numbers.
// The numbers can be negative or non - integer.
// If the array does not contain any numbers then you should return 0.
// addArray([1, 5, 8, 4, 7], [2, 8, 5, 3, 8]) => 51
// addArray([0], [2, 8, 5, 3, 8]) => 26

function addArray (array1, array2) {
  const sumArray1 = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  const sumArray2 = array2.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return sumArray1 + sumArray2

}

console.log(addArray([1,2,3,4], [1,2,3,4]));


var array = [
  { name: 'Billy', gender: 'Male' },
  { name: 'Sam', gender: 'Female' },
  { name: 'Bobby', gender: 'Male' }
];

const reduceArray = array.reduce((accumulator, currentValue) => {
  if (currentValue.gender === 'Male') {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(reduceArray);

// In this simple exercise, you will build a program
// that takes a value, integer, and returns a list of
// its multiples up to another value, limit. If limit is
// a multiple of integer, it should be included as well.
// There will only ever be positive integers passed into
// the function, not consisting of 0. The limit will
// always be higher than the base.

// For example, if the parameters passed are(2, 6),
// the function should return [2, 4, 6] as 2, 4, and 6
// are the multiples of 2 up to 6.

// [3, 22] => 3, 6, 9, 12, 15, 18, 21
// 3

function findMultiples (value, limiter) {
  var finalArray = [];
  for (var i = value; i <= limiter; i++) {
    if (i  % value === 0) {
      finalArray.push(i)
    }
  }
  return finalArray
}

console.log(findMultiples(9,45))
