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


/* CODE EXPLANATION */ 

// Initialization: The function starts by initializing an array fibNum with the first two 
// Fibonacci numbers [0, 1] and sets nextFibNum to 1.

// Fibonacci Generation: The while loop continues until the nextFibNum exceeds or equals the 
// given num. Inside the loop:

// The nextFibNum is calculated by adding the last two numbers in the fibNum array.
// The nextFibNum is then pushed into the fibNum array.

// Filtering Odd Numbers: The fibNum.reduce() function calculates the sum of the Fibonacci 
// numbers. The (b % 2 !== 0 ? b : 0) part checks if the number b is odd (b % 2 !== 0). If 
// it's odd, it adds b to the sum (a), otherwise, it adds 0.

// Return Statement: The function returns the sum of all odd Fibonacci numbers up to and 
// including the given num.