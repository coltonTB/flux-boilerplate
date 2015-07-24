var React = require('react'),
    Link = require('react-router').Link;

var Navbar = React.createClass({

  render: function() {

    return (
      <div id="navbar">
        <span>Navbar</span>
        <Link activeClassName="selected" to="/hello">hello</Link>
        <Link activeClassName="selected" to="/">home</Link>
      </div>
    );
  }

});

module.exports = Navbar;