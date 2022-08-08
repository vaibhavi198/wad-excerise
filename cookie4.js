var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.cookie('head_of_department', 'P K Mehta', {maxAge: 360000});; 

res.send('cookie set to expire in 1 hour'); 
});

var server = app.listen(3000,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s', host, port); 
});
