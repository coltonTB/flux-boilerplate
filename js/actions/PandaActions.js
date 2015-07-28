var AppDispatcher = require('../dispatcher/AppDispatcher');

var PandaActions = {

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

module.exports = PandaActions;
