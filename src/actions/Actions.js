var AppDispatcher = require('../dispatcher/AppDispatcher');

var Actions = {

  action: function(data) {
    AppDispatcher.dispatch({
      type: 'ACTION',
      data: data
    });
  }

};

module.exports = Actions;
