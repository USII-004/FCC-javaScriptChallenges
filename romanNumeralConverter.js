// Convert any given number into a roman numeral.

function convertToRoman(num) {
  const romanNumerals = [
     ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones place
     ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens place
     ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds place
     ["", "M", "MM", "MMM"] // Thousands place
   ];
 
   const thousands = romanNumerals[3][Math.floor(num / 1000)];
   const hundreds = romanNumerals[2][Math.floor((num % 1000) / 100)];
   const tens = romanNumerals[1][Math.floor((num % 100) / 10)];
   const ones = romanNumerals[0][num % 10];
 
   return thousands + hundreds + tens + ones;
 }
 
 convertToRoman(36);

//  Here's how the code works:

// Array romanNumerals: This 2D array holds the Roman numeral symbols for each digit 
// (from 0 to 9) in different places (ones, tens, hundreds, and thousands). Each row 
// represents a place value, and each column represents the corresponding Roman numeral.

// Extracting Digits:

// Math.floor(num / 1000): Extracts the thousands place digit.
// Math.floor((num % 1000) / 100): Extracts the hundreds place digit.
// Math.floor((num % 100) / 10): Extracts the tens place digit.
// num % 10: Extracts the ones place digit.
// Building Roman Numeral:

// romanNumerals[3][...]: Retrieves the Roman numeral symbol for the thousands place.
// romanNumerals[2][...]: Retrieves the Roman numeral symbol for the hundreds place.
// romanNumerals[1][...]: Retrieves the Roman numeral symbol for the tens place.
// romanNumerals[0][...]: Retrieves the Roman numeral symbol for the ones place.
// Concatenation: The Roman numeral symbols for thousands, hundreds, tens, and ones are concatenated to form the complete Roman numeral representation of the input number.

// For example, if num is 3549:

// thousands is "MMM".
// hundreds is "D".
// tens is "XL".
// ones is "IX".
// Concatenating these symbols gives "MMMDXLIX", which is the Roman numeral representation 
// of 3549.