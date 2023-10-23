// Create a function that sums two arguments together. If only 
// one argument is provided, then return a function that 
// expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and 
// addTogether(2) should return a function.

// Calling this returned function with a single argument 
// will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


function addTogether(a, b) {
  // Function to check if a number is valid
  function checkNumber(num) {
    return typeof num === 'number' ? num : undefined;
  }

  // If only one argument is provided and is a valid number,
  // return a new function expecting the second argument
  if (arguments.length === 1) {
    a = checkNumber(a);
    if (a !== undefined) {
      return function(b) {
        b = checkNumber(b);
        return b !== undefined ? a + b : undefined;
      };
    } else {
      return undefined;
    }
  }

  // If both arguments are provided and are valid numbers,
  // return the sum of a and b
  if (checkNumber(a) !== undefined && checkNumber(b) !== undefined) {
    return a + b;
  }

  // If any of the arguments is not a valid number, return undefined
  return undefined;
}

addTogether(2,3);