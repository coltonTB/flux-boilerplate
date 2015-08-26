var request = require('superagent'),
    API_ROOT = '',
    API_TOKEN = '';

module.exports = {

  get = function(callback) {
    request.get(API_ROOT)
      .set('Accept', 'application/json')
      .set('Authorization', "bearer " + API_TOKEN)
      .end(cb);

  }

}