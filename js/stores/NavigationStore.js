var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _state = 'home'

var NavigationStore = assign({}, EventEmitter.prototype, {
  
  navigateTo: function(newState){
    _state = newState;
    this.emit('navigate', newState);
  },

  getCurrentState: function(){
    return _state;
  }
});

AppDispatcher.register(function(action) {

  if (action.actionType !== 'navigate')
    return;

  switch(action.state) {
    case 'home':
      NavigationStore.navigateTo('home')
      break;

    case 'hello':
      NavigationStore.navigateTo('hello')

    default:
      // noop
      break;
  }
});

module.exports = NavigationStore;
