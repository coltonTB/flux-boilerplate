var express = require('express'),
    API = require('./constants.js').APIEndpoints;

var app = module.exports = express();

app.post(API.LOGIN, function(req, res, next){
  res.json({
    token: 'lol123abc'
  })
});

app.get(API.JOBS, function(req, res, next){

  var jobsList = [];
  for(var i=0; i < 10; i++){
    jobsList.push({
      jobStatus: 'pending',
      test: '234'
    });
  }
  res.json({
    jobs: jobsList
  })
});