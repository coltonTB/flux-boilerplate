var express = require('express'),
    fs = require('fs');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname+"/index.html")
});

app.use('/build', express.static(__dirname+"/build"));

app.use('/api/v1', require('./js/util/mockApi.js'));

app.listen(3000, function(){
  console.log('server listening on port 3000');
});