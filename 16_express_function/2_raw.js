const express = require('express');
const app = express();

app.use(express.raw());
// Returns middleware that parses all bodies as a Buffer

app.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.toString());
    // express.raw() - middleware ta use na korle
    // 8 nmbr line ta undefine ashbe

    // get request er 'headers' er 
    // 'Content-Type' howa lagbe 'application/octet-stream'   

    res.send('This is home page');
    
});


app.listen(3000, () => {
    console.log('listening to port 3000');
});