Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  // for(let i = 0; i < callback.length; i++) {
  //   newArray.push(callback[i]);
  // }

  callback.forEach(item => newArray.push(item))
  // Only change code above this line
  return newArray;
};

const testArr = ["usii", 5];

console.log(Array.prototype.myMap(testArr))

//Complete array map funtion.
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((item, instance, originalArr) => {
    newArray.push(callback(item, instance, originalArr));
  });

  // for(let i = 0; i < this.length; i++) {
  //   newArray.push(callback(this[i], i, this))
  // }
  // Only change code above this line
  return newArray;
};