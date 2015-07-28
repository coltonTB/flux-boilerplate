var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    ActionTypes = require('../util/constants.js').ActionTypes,
    Api = require('../util/api.js');

var _jobs = [];

var JobsStore = assign({}, EventEmitter.prototype, {
  getJobList: function(){
    return _jobs;
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.GET_JOBS:
      Api.getJobs(function(err, res){
        if (err){
          JobsStore.emit('error', err);
        }else{
          _jobs = JSON.parse(res.text).jobs;
          JobsStore.emit('loaded');
        }
      });
      break;

    default:
  }
});

module.exports = JobsStore;
