var request = require('superagent');
    constants = require('./constants.js');

var API = constants.APIEndpoints,
    APIRoot = constants.APIRoot;

module.exports = {

  signup: function(email, password, cb) {
    request.post(APIRoot+API.USERS)
      .send({ user: {
        email: email,
        password: password
      }})
      .set('Accept', 'application/json')
      .end(cb);
  },

  login: function(email, password, cb) {
    request.post(APIRoot+API.LOGIN)
      .send({ email: email, password: password })
      .set('Accept', 'application/json')
      .end(cb);
  },

  forgotPassword: function(email, cb) {
    request.post(APIRoot+API.FORGOT_PASSWORD)
      .send({ email: email })
      .set('Accept', 'application/json')
      .end(cb);
  },

  resetPassword: function(userID, resetToken, password, cb) {
    request.post(APIRoot+API.RESET_PASSWORD)
      .send({ 
        user_id: userID,
        password_reset_token: resetToken,
        password: password 
      })
      .set('Accept', 'application/json')
      .end(cb);
  },

  loadProfile: function(userID, cb) {
    request.get(APIRoot+API.USERS + "/" + userID)
      .set('Accept', 'application/json')
      .set('Authorization', "Bearer " + sessionStorage.getItem('accessToken'))
      .end(cb);
  },

  updateProfile: function(profile, cb) {
    request("PUT", APIRoot+API.USERS)
      .send({profile: profile})
      .set('Accept', 'application/json')
      .set('Authorization', "Bearer " + sessionStorage.getItem('accessToken'))
      .end(cb);
  },

  getJobs: function(cb){
    request.get(APIRoot+API.JOBS)
      .set('Accept', 'application/json')
      .set('Authorization', "Bearer " + sessionStorage.getItem('accessToken'))
      .end(cb)
  }

};
