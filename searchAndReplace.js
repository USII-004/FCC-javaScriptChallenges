// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it.
//  For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
  const regex = new RegExp(`\\b${before}\\b`, 'gi'); /* Using \\b for word boundaries*/
  const replacedStr = str.replace(regex, match => {
      // preserve the case of the first letter
      if (match[0].toUpperCase() === match[0]) {
          return after.charAt(0).toUpperCase() + after.slice(1);
      } else {
          return after.toLowerCase(); 
      }
  }); 
  return replacedStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


