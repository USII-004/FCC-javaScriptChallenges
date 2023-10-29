// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a 
// valid US number. The following are examples of valid formats for US numbers (refer to the 
// tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 
// 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any 
// combination of the formats provided above. The area code is required. If the country code 
// is provided, you must confirm that the country code is 1. Return true if the string is a 
// valid US phone number; otherwise return false.


function telephoneCheck(str) {
  // Regular expression pattern for a valid US phone number
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return phoneRegex.test(str);
}

telephoneCheck("555-555-5555");

console.log(telephoneCheck("555-555-5555"))


// In this function, the regular expression phoneRegex checks for the following patterns:

// (1\s?)?: Matches an optional "1" at the beginning, followed by an optional whitespace 
// character.
// (\(\d{3}\)|\d{3}): Matches either three digits enclosed in parentheses or three digits 
// without parentheses.
// ([\s\-]?): Matches an optional whitespace character or hyphen.
// \d{3}: Matches exactly three digits.
// ([\s\-]?): Matches an optional whitespace character or hyphen.
// \d{4}: Matches exactly four digits.

// The test() method checks if the input string matches the regex pattern and returns true if 
// it does, indicating that the input looks like a valid US phone number.