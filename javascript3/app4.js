
function reverseString(inputString) {
    const charArray = inputString.split('');
    const reversedArray = charArray.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
  }