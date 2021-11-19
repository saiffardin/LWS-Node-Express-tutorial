// error handling middleware -> 17 min 23 sec
const express = require('express');
const app = express()

const logger = (req, res, next) => {
    let reqTime = new Date(Date.now()).toLocaleString();
    let reqMethod = req.method;
    let reqUrl = req.originalUrl;
    let reqProtocol = req.protocol;
    let reqIp = req.ip;

    console.log(`
    reqTime - ${reqTime} 
    reqMethod - ${reqMethod}
    reqUrl - ${reqUrl} 
    reqProtocol - ${reqProtocol} 
    reqIp - ${reqIp}`);


    // next() na diye ekta error throw korlam
    throw new Error('This is an error');
}


// normal middleware er 3 ta parameter thake
// error handling middleware er 4 ta param thake
const errorMiddleware = (err, req, res, next) => {
    // kono middleware error throw korle 
    // shei error to ei function er 1st param er moddhe chole ashbe
    console.log(err.message);
    res.status(500).send('There was a server side error!');
};

app.use(logger);
app.use(errorMiddleware);


app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000, () => {
    console.log('listening to port 3000');
});