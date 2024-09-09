/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is a palindrome
    for (let i = 0; i < newStr.length / 2; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
