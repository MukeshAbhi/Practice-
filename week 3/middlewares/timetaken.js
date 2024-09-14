//calculating Total timetaken and average timetaken for an request 
const express = require('express');
const app = express();

let totalTimeTaken = 0;
let count = 0;
function timeTaken(req,res,next){
    const newDate = new Date();
    const startTime = newDate.getTime();
    res.on('finish',() => {
        const endDate = new Date();
        const endTime = endDate.getTime();

        const duration = endTime - startTime;

        totalTimeTaken += duration;
        count++;

        console.log('Total time taken is ' + totalTimeTaken+ ' in millisecond');
        console.log('Average time taken is ' + totalTimeTaken / count + ' in millisecond');
    });
    next();
}

app.use(timeTaken);

app.get('/', (req,res) => {
    res.send('Hi there');
});

app.post('/', (req,res) => {
    res.send('Hi there');
});

app.put('/', (req,res) => {
    res.send('Hi there');
});

app.delete('/', (req,res) => {
    res.send('Hi there');
});

app.use((error,req,res,next) => {
    res.json({
        message : 'NO NO NO'
    });
});

app.listen(3000);