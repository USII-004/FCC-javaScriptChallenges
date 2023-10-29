// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift 
// cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 
// places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character 
// (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
  // Define a helper function to decode a single character
  function decodeChar(char) {
    // Check if the character is a letter
    if (/[A-Z]/.test(char)) {
      // Use charCodeAt to get the ASCII code of the character
      // Shift the character code backward by 13 positions (ROT13)
      // Use String.fromCharCode to convert the new code back to a character
      return String.fromCharCode(((char.charCodeAt() - 65 + 13) % 26) + 65);
    }
    // If the character is not a letter, return it unchanged
    return char;
  }

  // Use split('') to convert the string into an array of characters
  // Use map to apply the decodeChar function to each character
  // Use join('') to convert the array back to a string
  return str.split('').map(decodeChar).join('');
}

// Example usage
console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
