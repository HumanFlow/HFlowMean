var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send ('My API works!');
    });

app.listen (port,function(){
    
    console.log   ('Running on port'+port);
});


