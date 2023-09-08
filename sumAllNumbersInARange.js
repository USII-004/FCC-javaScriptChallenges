function sumAll(arr) {
  let newArr = arr.sort((a, b) => a - b);
  const [start, end] = newArr;
  let total = 0;

  for (let i = start; i <= end; i++) {
    total += i
  }
  

  return total;

}

sumAll([1, 4]);

console.log(sumAll([10, 5]));