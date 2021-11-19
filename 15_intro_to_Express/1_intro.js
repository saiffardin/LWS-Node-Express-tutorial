// npm i express -> express install korlam
// then express k import korlam
const express = require('express');


// 'express' function k call korlam 
//  eta 'app' namok object return kore
const app = express();


// user jodi '/' url a 'get' request korle
// 2nd param a j callback function ta ase, sheta ke call korbe
app.get('/', (req, res) => {
    res.send('This is home page');
    // 1st route implement kora shesh
});

// server ta active holo 3000 port a
// list korar por callback function takey call korbe
app.listen(3000, () => {
    console.log('listening to port 3000');
});