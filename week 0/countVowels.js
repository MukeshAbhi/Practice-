/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels (str) {
    const vowels = "aeiou";
    var count = 0;
    for( let i = 0; i < str.length; i++){
        for( let j = 0; j < vowels.length; j++){
            if ( str[i].toLowerCase() == vowels[j]){
                count++;
            }
        }
    }
    console.log(count);
};

countVowels("Keep smiling, boo.")