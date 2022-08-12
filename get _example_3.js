var express = require('express'); 
 var app=express(); 
 
 app.get('/', function (req, res) { 
 res.sendFile( __dirname + "/" + "index3.html" ); 
 }) 
 app.get('/x', function (req, res) { 
 res.send('<p>Firstname: ' + req.query['firstname']+ '<p>Lastname: '+req.query['lastname'] +'</p><p>Password: '+req.query['password']+'<p>AboutYou: '+req.query['aboutyou']); 
 }) 
 
 var server = app.listen(8000, "127.0.0.1", function () { 
 var host = server.address().address 
 var port = server.address().port 
 console.log("Example app listening at http://%s:%s", host, 
port) 
 })