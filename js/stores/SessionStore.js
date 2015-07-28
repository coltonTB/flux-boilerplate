var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');
    Dispatcher = require('../dispatcher/AppDispatcher.js'),
    ActionTypes = require('../util/constants.js').ActionTypes,
    Api = require('../util/api.js');

var SessionStore = assign({}, EventEmitter.prototype, {

  isLoggedIn: function(){
    var token = sessionStorage.getItem('accessToken');
    return token !== 'undefined' && typeof token === 'string';
  },

  getUserType: function(){
    var token = sessionStorage.getItem('accessToken');
    return token === 'customer' || token === 'panda' || token == 'admin' 
      ? token
      : 'customer';
  },

  getAccessToken: function(){
    return sessionStorage.getItem('accessToken');
  }

});

SessionStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.LOGIN:
      var pw = action.data.password;
      var email = action.data.email;
      Api.login(email, pw, function(err, res){
        if (err) {
          SessionStore.emit('error', err);
        }else{
          response = JSON.parse(res.text);
          sessionStorage.setItem('accessToken', response.token);
          window.location = '/';
        }
      });
      break;

    case ActionTypes.SET_TOKEN:
      sessionStorage.setItem('accessToken', action.data.token);
      SessionStore.emit('change');
      break;

    case ActionTypes.LOGOUT:
      sessionStorage.removeItem('accessToken');
      window.location = '/';
      break;

    default:
  }

});

module.exports = SessionStore;
