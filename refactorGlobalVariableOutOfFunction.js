// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

let newList = bookList.slice();
// Change code below this line
function add(bookName) { 
  newList.push(bookName);
  return newList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = newList.indexOf(bookName);
  if (book_index >= 0) {

    newList.splice(book_index, 1);
    return newList;

    // Change code above this line
    }
}

// the above code is my own method of forrectly refactoring the global variable without
// modifying it. however FCC does not accept the solution.



// the code below is the corrected FCC format for the solution.
// study and understand the difference between mine and theirs.~~

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newList = [...arr];
  newList.push(bookName);
  return newList;
  
  // Change code above this line
}

// Change code below this line 
function remove(arr, bookName) {
  let  newList = [...arr];
  if (newList.indexOf(bookName) >= 0) {

    newList.splice(newList.indexOf(bookName), 1);
    return newList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);

var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(newestBookList);


// console.log(bookList);
