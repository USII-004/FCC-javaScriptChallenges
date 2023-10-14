// Find the smallest common multiple of the provided parameters that can be evenly divided by 
// both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
// also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


// Function to find the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a; 
}

// Function to find the least common multiple (LCM) of two numbers

function lcm (a, b) {
  return ((a * b) / gcd(a, b));
}

// Function to find the LCM of an array of numbers
function smallestCommons(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize the LCM as the first number in the array
  let lcmValue = arr[0];

  // Iterate through the array and find the LCM with each number
  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    lcmValue = lcm(lcmValue, i);
  }

  return lcmValue; 
}

smallestCommons([1,5]);

/* CODE EXPLANATION*/

// GREATEST COMMON DIVISOR : 
// this function calculates the Greatest Common Divisor (GCD) of two numbers a and b using 
// the Euclidean Algorithm. The GCD is the largest positive integer that divides both a and b 
// without a remainder.

// LEAST COMMON MULTIPLE:
// This function calculates the Least Common Multiple (LCM) of two numbers a and b using the 
// formula: LCM(a, b) = (a * b) / GCD(a, b). It uses the previously defined gcd function to 
// find the GCD of the two numbers.

// MAIN FUNCTION: 
// The arr parameter is an array of two numbers representing the range.
// The input array arr is sorted in ascending order to ensure that the smaller number is first.
// The lcmValue is initialized with the first number in the sorted array.
// The loop starts from the next number after the first number in the array and goes up to the 
// second number in the array.
// Inside the loop, the lcm function is used to calculate the LCM of lcmValue and the current 
// loop variable i.
// The final calculated LCM for the given range is returned.