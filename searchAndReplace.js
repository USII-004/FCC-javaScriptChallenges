// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it.
//  For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
  const regex = new RegExp(`\\b${before}\\b`, 'gi'); /* Using \\b for word boundaries*/
  const replacedStr = str.replace(regex, match => {
      // preserve the case of the first letter
      if (match[0].toUpperCase() === match[0]) {
          return after.charAt(0).toUpperCase() + after.slice(1);
      } else {
          return after.toLowerCase(); 
      }
  }); 
  return replacedStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less 
// than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in 
// the sequence is the sum of the two previous numbers. The first seven numbers of the 
// Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less 
// than or equal to 10 are 1, 1, 3, and 5.
function sumFibs(num) {
  // Initialize an array with the first two Fibonacci numbers [0, 1]
  let fibNum = [0, 1];
  // Initialize the next Fibonacci number to 1
  let nextFibNum = 1;

  // Loop until the next Fibonacci number exceeds or equals the given num
  while (nextFibNum <= num) {
    // Add the next Fibonacci number to the array
    fibNum.push(nextFibNum);
    // Calculate the next Fibonacci number by summing the last two numbers in the array
    nextFibNum = fibNum[fibNum.length - 1] + fibNum[fibNum.length - 2];
  }

  // Use reduce() to sum the Fibonacci numbers, considering only odd numbers
  return fibNum.reduce((a, b) => a + (b % 2 !== 0 ? b : 0), 0);
}
console.log(sumFibs(5));


