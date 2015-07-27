var AppDispatcher = require('../dispatcher/AppDispatcher');

var CustomerActions = {

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

module.exports = CustomerActions;
