var React = require('react'),
    Navbar = require('./Navbar.jsx'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var sessionStore = require('../stores/SessionStore.js'),
    refreshFn;

var AppController = React.createClass({

  getInitialState: function() {
    return {
      loggedIn: sessionStore.isLoggedIn()
    };
  },

  componentDidMount: function() {
    refreshFn = function(){
      this.setState(this.getInitialState());
    }.bind(this);
    sessionStore.on('change', refreshFn);
  },

  componentWillUnmount: function () {
    sessionStore.removeListener('change', refreshFn);  
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