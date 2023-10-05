
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.




function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[0].toLowerCase())) {
    return str + 'way';
  }
  else {
    let consonantCluster = '';
    let index = 0;
    while (index < str.length && !vowels.includes(str[index].toLowerCase())) {
      consonantCluster += str[index];
      index++;
    }
    return str.slice(index) + consonantCluster.toLowerCase() + 'ay' 
  } 
}

translatePigLatin("consonant");