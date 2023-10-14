// Given the array arr, iterate through and remove each element starting from the first element 
// (the 0 index) until the function func returns true when the iterated element is passed 
// through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be 
// returned as an empty array.


function dropElements(arr, func) {
  // Find the index of the first element that satisfies the condition
  const index = arr.findIndex(func);

  // If a satisfying element is found, return the rest of the array
  if (index !== -1) {
    return arr.slice(index);
  }

  // If no satisfying element is found, return an empty array
  return [];
}

/* CODE EXPLANATION */ 

// dropElements Function:

// This function takes two parameters: arr (an array) and func (a function representing the 
// condition). findIndex Method:

// The findIndex method is used on the input array arr. It checks each element in the array 
// against the provided func (the condition function) until it finds an element where func 
// returns true.
// If such an element is found, findIndex returns its index. If not, it returns -1.

// Conditional Check:

// The function checks if index is not equal to -1, meaning a satisfying element was found in 
// the array.
// If a satisfying element is found, it uses the slice method to return a new array containing 
// elements starting from the index where the satisfying element was found to the end of the 
// original array.

// Return Values:

// If a satisfying element is found, the function returns the new array starting from the 
// index where the condition was met.
// If no satisfying element is found (index === -1), the function returns an empty array [].