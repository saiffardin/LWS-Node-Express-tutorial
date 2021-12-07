const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send('About');
})

app.listen(3000, () => {
    console.log('Listening to port 3000')
});

// ekta simple express application
// ekhane kebol ektai route ache -> /about
// ei route a hit korle amra 'about' pabo

// porer file a amra amader 1st middleware ta likhbo