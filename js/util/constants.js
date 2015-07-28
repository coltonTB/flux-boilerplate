var keyMirror = require('keymirror');

module.exports = {

  APIRoot: "http://localhost:3000/api/v1",

  APIEndpoints: {
    LOGIN: "/sessions",
    FORGOT_PASSWORD: "/password_resets",
    RESET_PASSWORD: "/password_resets/reset",
    USERS: "/users",
    JOBS: "/jobs"
  },

  ActionTypes: keyMirror({
    LOGIN: null,
    LOGOUT: null,
    GET_JOBS: null
  })
};
