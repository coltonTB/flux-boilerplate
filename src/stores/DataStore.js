var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');
    Dispatcher = require('../dispatcher/AppDispatcher.js'),
    Api = require('../util/api.js');

var DataStore = assign({}, EventEmitter.prototype, {});

DataStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

    case 'ACTION':
      break;
  }

});

module.exports = DataStore;
