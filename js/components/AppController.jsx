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

  render: function() {
    return (<div>
      <Navbar isLoggedIn={this.state.loggedIn} />
      <div id="content">
        <RouteHandler isLoggedIn={this.state.loggedIn} />
      </div>
    </div>);
  }

});

module.exports = AppController;