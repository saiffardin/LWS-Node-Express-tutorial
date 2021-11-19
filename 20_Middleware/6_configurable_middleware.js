// configurable middleware
// middleware er moddhe kono data pass korte chacchi

// eta korar jonno amra ekta function banabo
// ja kina middleware return korbe

const express = require('express');
const app = express()


const loggerWrapper = (options) => {

    return function (req, res, next) {
        if (options.log) {
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

            next();
        }
        else {
            throw new Error('Failed to log.');
        }
    }
}


app.use(loggerWrapper({log: true}));


app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000, () => {
    console.log('listening to port 3000');
});