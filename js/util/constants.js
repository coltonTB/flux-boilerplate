var keyMirror = require('keymirror');

var APIRoot = "http://localhost:4000/api/v1";

module.exports = {
  APIEndpoints: {
    LOGIN: APIRoot + "/sessions",
    FORGOT_PASSWORD: APIRoot + "/password_resets",
    RESET_PASSWORD: APIRoot + "/password_resets/reset",
    USERS: APIRoot + "/users",
    JOBS: APIRoot + "/jobs"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    REDIRECT: null,
    SIGNUP_REQUEST: null,
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,
    CONFIRM_RESPONSE: null,
    SIGNUP_RESPONSE: null,
    LOAD_SECRETS: null,
    RECEIVE_SECRETS: null,
    FORGOT_PASSWORD_RESPONSE: null,
    RESET_PASSWORD_RESPONSE: null,
    ACCOUNT_RESPONSE: null,
    UPDATE_ACCOUNT_REQUEST: null,
    UPDATE_ACCOUNT_RESPONSE: null,
    PROFILE_RESPONSE: null,
    LOAD_PROFILE: null,
    UPDATE_PROFILE_REQUEST: null,
    UPDATE_PROFILE_RESPONSE: null,
    LOGOUT: null
  })
};
