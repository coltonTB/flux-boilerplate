var AppDispatcher = require('../dispatcher/AppDispatcher');

var NavigationActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: 'type',
      text: 'text'
    });
  }
};

module.exports = NavigationActions;
