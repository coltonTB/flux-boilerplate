var React = require('react'),
    Link = require('react-router').Link;

var LoggedOutHome = React.createClass({

  render: function() {
    return (<div>
      <h2>You are Logged out. Please Log in or sign up</h2>
      <Link className="request-job" to="/requestjob">
        Request a Job
      </Link>
    </div>);
  }

});

module.exports = LoggedOutHome;