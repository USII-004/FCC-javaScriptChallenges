// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.



function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the ASCII code difference between adjacent letters is greater than 1
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      // return the missing letter found using String.fromCharCode
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }
  // if no missing letter found, return undefined
  return undefined;
}

fearNotLetter("abce");

/* CODE EXPLANATION */ 

// Function Definition:
// function fearNotLetter(str) { ... }: This line defines a function called fearNotLetter
// which takes a string str as an argument. 

// Loop Through the String:
// for (let i = 0; i < str.length - 1; i++) { ... }: This line sets up a for loop that
//  iterates through the characters of the input string. The loop runs until the second to
//  last character of the string (str.length - 1) because we are comparing each character with
//  the next one (i + 1).

// Check for Missing Letter:
// if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) { ... }: Inside the loop, this line
// calculates the difference between the ASCII codes of the current character and the next 
// character in the string. If the difference is greater than 1, it means there is a gap 
// between the current character and the next character, indicating a missing letter.

// Return the Missing Letter:
// return String.fromCharCode(str.charCodeAt(i) + 1);: If a missing letter is found, this line
// calculates the ASCII code of the current character (str.charCodeAt(i)) and adds 1 to it. 
// Then, it converts this ASCII code back to a character using String.fromCharCode(). This 
// character represents the missing letter and is returned as the result of the function.

// Return undefined if No Missing Letter:
// return undefined;: If the loop completes without finding a missing letter, the function 
// returns undefined, indicating that there are no missing letters in the input string.