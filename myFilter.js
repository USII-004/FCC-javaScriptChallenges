Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((elem, index, array) => {
    if (Boolean(callback(elem, index, array) == true)) {
      newArray.push(elem);
    }
  });
  // Only change code above this line
  return newArray;
};

// my filter function using forEach() loop