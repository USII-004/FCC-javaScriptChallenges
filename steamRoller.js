// Flatten a nested array. You must account for varying levels of nesting.


function steamrollerArray (arr) {
  // initialize the flattened array to be equal to an empty array
  let flattened  = [];

  forEach((elem) => {
    if (Array.isArray(elem)) {
      flattened = flattened.concat(steamrollerArray(elem));
    }else {
      flattened.push(elem);
    }
  });

  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);


/* CODE EXPLANATION */

// This function, steamrollerArray, takes an array arr as input and is designed to flatten any 
// nested arrays within it.

// An empty array called flattened is declared and used to store elements from the nested array

// forEach method is use to iterate over every element of the array, 
// If the current element being iterated is an array (checked using Array.isArray(element)), 
// it means it's a nested array.
// In this case, the function calls itself recursively: flattenArray(element). This recursive 
// call is crucial. It means that if there are multiple levels of nesting, the function will 
// continue to flatten them until there are no more nested arrays.
// The result of the recursive call is concatenated (flattened.concat(...)) with the flattened 
// array. This concatenation ensures that the elements from the nested array are added to the 
// flattened array.
// If the current element is not an array, it's a standalone value. In this case, it's directly 
// added to the flattened array using the push method.

