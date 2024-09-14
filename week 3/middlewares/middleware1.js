// count number of requests received 

const { error } = require('console');
const express = require('express');
const app = express();

let count = 0;
function countNumberOfRequests ( req,res,next){
    count++;
    console.log(count);
    next();
};

app.get('/', countNumberOfRequests , (req,res) => {
    res.send('Hello world');
});

//global catch
app.use((error,req,res,next) => {
    res.json({
        msg: 'Somethig Went Wrong'
    });
});
app.listen(3000);