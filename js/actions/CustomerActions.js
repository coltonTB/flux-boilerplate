var AppDispatcher = require('../dispatcher/AppDispatcher');

var CustomerActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.dispatch({
      type: 'type',
      data: {

      }
    });
  }
};

module.exports = CustomerActions;
