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

    var profileLink = this.props.isLoggedIn
      ? <Link activeClassName="selected" to="/profile">profile</Link>
      : '';

    var signupLink = this.props.isLoggedIn
      ? ''
      : <Link to="/signup">Sign Up</Link>

    return (
      <div id="navbar">
        <Link className="home" to="/">SeekPanda</Link>
        {LogInOut}
        {profileLink}
        {signupLink}
      </div>
    );
  }

});

module.exports = Navbar;