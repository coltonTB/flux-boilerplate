var AppDispatcher = require('../dispatcher/AppDispatcher');

var NavigationActionCreator = {

  navigateTo: function(state) {
    AppDispatcher.dispatch({
      actionType: 'navigate',
      state: state
    });
  }
};

module.exports = NavigationActionCreator;
