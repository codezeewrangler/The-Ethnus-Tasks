console.log("Hello, World!");function reverseNumber(x) {
  // Convert the number to a string
  const numStr = x.toString();

  // Reverse the string using array methods
  const reversedStr = numStr.split('').reverse().join('');

  // Convert the reversed string back to a number
  const reversedNum = parseInt(reversedStr);

  return reversedNum;
}

// Sample usage:
const x = 32243;
const reversedX = reverseNumber(x);
console.log(`Original number: ${x}`);
console.log(`Reversed number: ${reversedX}`);


// Handling negative numbers (optional):
function reverseNumberWithNegative(x) {
  const numStr = x.toString();
  const isNegative = numStr.startsWith('-'); // Check if negative

  let reversedStr = '';
  if (isNegative) {
    reversedStr = '-' + numStr.slice(1).split('').reverse().join(''); // Reverse without the minus sign
  } else {
    reversedStr = numStr.split('').reverse().join('');
  }

  const reversedNum = parseInt(reversedStr);
  return reversedNum;
}

