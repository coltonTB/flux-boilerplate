var React = require('react'),
    Navbar = require('./Navbar.jsx'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var sessionStore = require('../stores/SessionStore.js');

var AppController = React.createClass({

  getInitialState: function() {
    return {
      loggedIn: sessionStore.isLoggedIn()
    };
  },

  componentDidMount: function() {
    sessionStore.on('change', function(){
      this.setState(this.getInitialState())
    }.bind(this));
  },

  render: function() {

    var loginStatus = this.state.loggedIn
      ? 'Logged In'
      : 'Logged Out';

    return (<div>
      <Navbar isLoggedIn={this.state.loggedIn}/>
      <div id="content">
        <RouteHandler/>
      </div>
      {loginStatus}
    </div>);
  }

});

module.exports = AppController;