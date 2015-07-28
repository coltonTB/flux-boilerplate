var React = require('react'),
    Link = require('react-router').Link;

var SignUpWait = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Thank you for signing up. Please check your email for a link</h3>
        <Link to="/signup/3/abcdefg1234567">Email Link</Link>
      </div>
    );
  }

});

module.exports = SignUpWait;