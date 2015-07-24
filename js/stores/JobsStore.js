var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var JobsStore = assign({}, EventEmitter.prototype, {

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case 
      break;

    default:
  }
});

module.exports = JobsStore;
