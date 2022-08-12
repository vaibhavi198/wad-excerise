var express = require('express'); 
var app=express(); 
app.get('/', function (req, res) { 
res.sendFile( __dirname + "/" + "index.html" ); 
}) 

app.get('/process_get', function (req, res) { 
res.send('<p>Username: ' + 
req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>'); 
}) 
var server = app.listen(8000, "127.0.0.1", function () { 
var host = server.address().address 
var port = server.address().port 
console.log("Example app listening at http://%s:%s", host, 
port) 
})