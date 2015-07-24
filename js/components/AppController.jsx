var React = require('react'),
    Navbar = require('./Navbar.jsx'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var AppController = React.createClass({

  render: function() {

    return (<div>
      <Navbar />
      <div id="content">
        <RouteHandler/>
      </div>
    </div>);
  }

});

module.exports = AppController;