var React = require('react'),
    Link = require('react-router').Link,
    SessionActions = require('../actions/SessionActions.js');

var Navbar = React.createClass({

  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  _logOut: function(){
    SessionActions.logout();
  },

  render: function() {
    var LogInOut = this.props.isLoggedIn
      ? <a href="javascript:;" onClick={this._logOut}>Log Out</a>
      : <Link activeClassName="selected" to="/login">Log In</Link>

    return (
      <div id="navbar">
        <span>Navbar</span>
        {LogInOut}
        <Link activeClassName="selected" to="/">home</Link>
      </div>
    );
  }

});

module.exports = Navbar;