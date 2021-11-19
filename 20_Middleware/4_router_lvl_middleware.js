// 'adminRouter' - namok notun router banaisi -> [line 8]
// er under a '/dashboard' namok route add korsi 'get' request er jonno -> [line 41]
// ei router ta ebar 'logger' middleware takey use korbe -> [line 33]
// r amader 'app' use korbe 'adminRouter' k -> [line 32]

const express = require('express')
const app = express()
const adminRouter = express.Router();

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
    // next() er parameter er moddhe kono kisu pass korle 
    // sheta k error hishabe dhore
    // porer middleware a successfully jawar jonno
    // next() - er moddhe kono param pass korbo na
}

app.use('/admin', adminRouter);
adminRouter.use(logger);
// ei khetre 'logger' namok middleware takey
// amra 'router' level a use korsi

app.get('/about', (req, res) => {
    res.send('About');
});

adminRouter.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});

app.listen(3000, () => {
    console.log('listening to port 3000');
})