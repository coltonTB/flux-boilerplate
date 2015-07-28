var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');
    Dispatcher = require('../dispatcher/AppDispatcher.js'),
    ActionTypes = require('../util/constants.js').ActionTypes,
    Api = require('../util/api.js');

var SessionStore = assign({}, EventEmitter.prototype, {

  isLoggedIn: function(){
    var token = sessionStorage.getItem('accessToken')
    return token !== 'undefined' && typeof token === 'string';
  },

  getUserType: function(){
    return 'panda';
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

    case ActionTypes.LOGOUT:
      sessionStorage.removeItem('accessToken');
      SessionStore.emit('change')
      break;

    default:
  }

});

module.exports = SessionStore;
