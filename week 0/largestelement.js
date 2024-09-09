/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement (input) {
    let fakeArray = input[0];
    for (let i = 0; i < input.length; i++){
        if(input[i] > fakeArray){
            fakeArray = input[i]
        }
    }
    console.log(fakeArray);

};

findLargestElement([1,3,5,7,9,3,45,5,6,45,44,35]);