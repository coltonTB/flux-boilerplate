var express = require('express'),
    API = require('./constants.js').APIEndpoints;

var app = module.exports = express();

app.post(API.LOGIN, function(req, res, next){
  res.json({
    token: 'lol123abc'
  })
});

app.get('/test', function(req, res, next){
  res.send('testing ok');
});