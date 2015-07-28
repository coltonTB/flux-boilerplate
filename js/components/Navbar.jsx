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
    if (this.props.isLoggedIn) {
      return (<div id="navbar">
        <Link to="/" className="jobs" activeClassName="selected">jobs</Link>
        <Link to="/profile" activeClassName="selected" >profile</Link>
        <a className="right" href="javascript:;" onClick={this._logOut}>Log Out</a>
      </div>)
    }else{
      return (<div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/signup/1" className="right" activeClassName="selected">Sign Up</Link>
        <Link to="/login" className="right" activeClassName="selected">Log In</Link>
      </div>)
    }
  }

});

module.exports = Navbar;