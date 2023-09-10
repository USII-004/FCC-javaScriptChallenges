function diffArray(arr1, arr2) { 
  const newArr1 = arr1.filter(items => !arr2.includes(items));
  const newArr2 = arr2.filter(items => !arr1.includes(items))
  return newArr1.concat(newArr2).sort((a, b) => a- b)
}

// this function returns the difference between two arrays and arrange the
// result in ascending order. 