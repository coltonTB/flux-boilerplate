var AppDispatcher = require('../dispatcher/AppDispatcher');

var AdminActions = {

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

module.exports = AdminActions;
