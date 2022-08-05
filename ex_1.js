var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("I am at root");
    });


app.get('/hello', function(req, res){
res.send("Hello World!");
});
app.listen(3000);
