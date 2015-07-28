var express = require('express'),
    fs = require('fs'),
    path = require('path');

var app = express();

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname+"/../index.html"))
});

app.use('/build', express.static(path.resolve(__dirname+"/../build")));

app.use('/api/v1', require('./mockApi.js'));

app.listen(3000, function(){
  console.log('server listening on port 3000');
});