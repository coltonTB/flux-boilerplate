var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../util/constants.js').ActionTypes;

var SessionActions = {

  getJobs: function() {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_JOBS
    });
  },

  editJob: function(jobID) {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_JOBS
    });
  },

  updateJob: function(jobID) {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_JOBS
    });
  }

};

module.exports = SessionActions;
