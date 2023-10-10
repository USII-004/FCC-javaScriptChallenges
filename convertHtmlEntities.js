// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to 
// their corresponding HTML entities.

function convertHTML(str) {
  const htmlEntities = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  };
  // use replace method with regular expression to replace special characters with html entites 


  return str.replace(/[&<>"']/g, match => htmlEntities[match] );
}

convertHTML("Dolce & Gabbana");

/* CODE EXPLANATION*/ 

// Function Definition:
// function convertHTML(str) { ... }: This line defines a function called convertHTML that 
// takes a string str as an argument.

// HTML Entity Mapping:
// const htmlEntities = { ... }: This is an object that maps special characters (&, <, >, ", 
// and ') to their corresponding HTML entities.

// Regular Expression and replace Method:
// str.replace(/[&<>"']/g, match => htmlEntities[match]): Here, the replace method is used 
// with a regular expression /[&<>"']/g to match all occurrences of the special characters 
// &, <, >, ", and ') in the input string (str). The regular expression uses square brackets 
// [] to define a character set and the g flag to perform a global search.
// For each matched special character, the match parameter represents the matched character. 
// The arrow function match => htmlEntities[match] replaces each matched character with its 
// corresponding HTML entity from the htmlEntities object.

// Return Statement:
// return str.replace(...);: The modified string with HTML entities replaced is returned from 
// the function.