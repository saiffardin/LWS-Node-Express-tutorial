// ebar amra ekta middleware banabo
// etar kaaj hobe jokhn kono request ashbe...
// tokhn shei request er details k log korbe

const express = require('express')
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

    // next() na dile hang korbe application
    next();
}

app.use(logger);
// 'logger' namok middleware takey amra 'application' lvl a use korsi 

app.get('/', (req, res) => {
    res.send('saif home 3.js');
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})