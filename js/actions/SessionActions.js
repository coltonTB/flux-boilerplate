var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../util/constants.js').ActionTypes;

var SessionActions = {

  login: function(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.LOGIN,
      data: data
    });
  },

  logout: function(){
    AppDispatcher.dispatch({
      type: ActionTypes.LOGOUT,
      data: null
    });
  }
};

module.exports = SessionActions;
