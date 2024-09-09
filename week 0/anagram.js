/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram (str1, str2){
    if(str1.length == str2.length) {
        var valueStr1 = 0;
        var valueStr2 = 0;
        for(let i = 0; i < str1.len; i++){
            valueStr1 += str1[i].toUpperCase().charCodeAt(0);
            valueStr2 += str2[i].toUpperCase().charCodeAt(0);
        }
        if (valueStr1 == valueStr2 ){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

