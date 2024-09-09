/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 = 0.01s
2. Sum from 1-100000 = 0.015s
3. Sum from 1-1000000000 = 1.241s
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime (n){
    const start = new Date();
    const startTime = start.getTime();
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    console.log(sum);

    const end = new Date();
    const endTime = end.getTime();

    const timeTaken =  (endTime - startTime ) / 1000;
    console.log(timeTaken);
}

calculateTime(10000000000);