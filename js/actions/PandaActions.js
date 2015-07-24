var AppDispatcher = require('../dispatcher/AppDispatcher');

var PandaActions = {

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

module.exports = PandaActions;
