function alphabetizeString(str) {
  // 1. Convert the string to lowercase (optional, but good practice for consistent sorting)
  const lowerStr = str.toLowerCase();

  // 2. Split the string into an array of characters
  const charArray = lowerStr.split('');

  // 3. Sort the array alphabetically
  charArray.sort();

  // 4. Join the sorted array back into a string
  const sortedStr = charArray.join('');

  return sortedStr;
}

// Example usage:
const inputString = 'webmaster';
const sortedString = alphabetizeString(inputString);
console.log(`Original string: '${inputString}'`);
console.log(`Alphabetized string: '${sortedString}'`);