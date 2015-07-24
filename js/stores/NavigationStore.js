var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var NavigationStore = assign({}, EventEmitter.prototype, {
  navigateTo: function(state){
    this.emit('navigate', state);
  }
});

AppDispatcher.register(function(action) {

  if (action.actionType !== 'navigate')
    return;

  switch(action.state) {
    case 'home':
      NavigationStore.navigateTo('home')
      break;

    case 'profile':
      NavigationStore.navigateTo('profile')

    default:
      // noop
      break;
  }
});

module.exports = NavigationStore;
