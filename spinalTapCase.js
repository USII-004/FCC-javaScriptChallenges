/* Convert a string to spinal case.
 Spinal case is all-lowercase-words-joined-by-dashes. */ 

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
  str = str.replace(/[\s_]/g, "-").toLowerCase();
  str = str.replace(/-+/g, "-")
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));