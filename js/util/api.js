var request = require('superagent');
var APIEndpoints = require('./constants.js').APIEndpoints;

module.exports = {

  signup: function(email, password, cb) {
    request.post(APIEndpoints.USERS)
      .send({ user: {
        email: email,
        password: password
      }})
      .set('Accept', 'application/json')
      .end(cb);
  },

  login: function(email, password, cb) {
    request.post(APIEndpoints.LOGIN)
      .send({ email: email, password: password })
      .set('Accept', 'application/json')
      .end(function(err, res){
        res = JSON.parse(res.text);
        sessionStorage.setItem('accessToken', res.token);
        cb(err, res);
      });
  },

  logout: function(cb){
    sessionStorage.removeItem('accessToken');
    cb();
  },

  forgotPassword: function(email, cb) {
    request.post(APIEndpoints.FORGOT_PASSWORD)
      .send({ email: email })
      .set('Accept', 'application/json')
      .end(cb);
  },

  resetPassword: function(userID, resetToken, password, cb) {
    request.post(APIEndpoints.RESET_PASSWORD)
      .send({ 
        user_id: userID,
        password_reset_token: resetToken,
        password: password 
      })
      .set('Accept', 'application/json')
      .end(cb);
  },

  loadProfile: function(userID, cb) {
    request.get(APIEndpoints.USERS + "/" + userID)
      .set('Accept', 'application/json')
      .set('Authorization', "Bearer " + sessionStorage.getItem('accessToken'))
      .end(cb);
  },

  updateProfile: function(profile, cb) {
    request("PUT", APIEndpoints.USERS)
      .send({profile: profile})
      .set('Accept', 'application/json')
      .set('Authorization', "Bearer " + sessionStorage.getItem('accessToken'))
      .end(cb);
  }

};
