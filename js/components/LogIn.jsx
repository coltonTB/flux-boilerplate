var React = require('react/addons'),
    SessionActions = require('../actions/SessionActions.js'),
    SessionStore = require('../stores/SessionStore.js');

var Hello = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      email: '',
      password: '',
      error: false
    };
  },

  componentDidMount: function () {
    SessionStore.on('error', function(err){
      this.setState({error: err});
    }.bind(this)); 
  },

  _logIn: function(){
    SessionActions.login({
      email: this.state.email,
      password: this.state.password
    });
  },

  render: function() {
    return (<div>
      <label>Email</label>
      <input type="email" valueLink={this.linkState('email')}/>

      <label>Password</label>
      <input type="password" valueLink={this.linkState('password')}/>

      <button onClick={this._logIn}>
        Log In
      </button>
    </div>);
  }

});

module.exports = Hello;