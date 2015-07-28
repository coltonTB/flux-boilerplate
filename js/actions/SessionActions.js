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
  },

  setToken: function(token){
    AppDispatcher.dispatch({
      type: ActionTypes.SET_TOKEN,
      data: {
        token: token
      }
    })
  }
};

module.exports = SessionActions;
