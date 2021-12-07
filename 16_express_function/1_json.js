const express = require('express');
const app = express();

app.use(express.json());
// Returns middleware that only parses JSON 
// and only looks at requests where the 
// Content-Type header matches the type option.

app.get('/', (req, res) => {
    console.log(req.body);
    // express.json() - middleware ta use na korle
    // 10 nmbr line ta blank ashbe

    // get request er 'headers' er 
    // 'Content-Type' howa lagbe 'application/json'   

    res.send('This is home page');
});


app.listen(3000, () => {
    console.log('listening to port 3000');
});