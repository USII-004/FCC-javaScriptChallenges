// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original 
// provided arrays.

// In other words, all values present from all arrays should be included in their original 
// order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should 
// not be sorted in numerical order.


function uniteUnique(arr) {
  // combine all arrays into a single array using concat
  const combinedArr = [].concat(...arguments);

  // use Set to store unique values while preserving order
  const uniqueValues = new Set(combinedArr);
  return Array.from(uniqueValues);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/*CODE EXPLANATION*/

// Function Definition:
// function uniteUnique(arr) { ... }: This line defines a function called uniteUnique which 
// takes multiple arrays as arguments using the arguments object.

// Combining All Arrays:
// const combinedArray = [].concat(...arguments);: Here, the concat method is used to combine 
// all the arrays into a single array. The arguments object contains all the arrays passed to 
// the function. The ...arguments syntax spreads the arrays, allowing them to be passed 
// individually to concat. This results in a single array containing all the elements from the 
// input arrays.

// Using Set for Uniqueness:
// const uniqueValues = new Set(combinedArray);: A Set object is created using the combined 
// array. A Set automatically removes duplicate values, so uniqueValues now contains only 
// unique elements from the combined array. The order of insertion is preserved in a Set, 
// meaning the elements are stored in the order they first appeared.

// Converting Set Back to Array:
// return Array.from(uniqueValues);: The Array.from method is used to convert the Set back to 
// an array. This step is necessary because Set objects are not directly iterable. The function 
// returns this array of unique values while preserving the order of their appearance in the 
// original arrays.
