// eitai amra amader 1st middleware ta likhbo
const express = require('express');
const app = express();

// 1st middleware
const myMiddleware1 = (req,res,next)=>{
    console.log('I am logging - 1');
    next();
    // 'next()' call na korle amader program hang hoye jabe
}


// 2nd middleware
const myMiddleware2 = (req,res,next)=>{
    console.log('I am logging - 2');
    next();
    // 'next()' call na korle amader program hang hoye jabe
}


// middleware shudhu define korlei hobe na
// amader express app k bolte hobe j tumi eta use koro
app.use(myMiddleware1);
app.use(myMiddleware2);


app.get('/about', (req, res) => {
    res.send('About');
})

app.listen(3000, () => {
    console.log('Listening to port 3000')
});


