const express = require('express');
const app = express();
const port = 3300;

app.get('/', function(req, res){
    res.send("Hello there");
});

app.listen(port, ()=>{
    console.log("Chess server has been started");
});