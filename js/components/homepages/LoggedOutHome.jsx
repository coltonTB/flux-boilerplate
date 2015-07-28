var React = require('react');

var LoggedOutHome = React.createClass({

  render: function() {
    return (
      <div>You are Logged out. Please Log in or sign up</div>
    );
  }

});

module.exports = LoggedOutHome;