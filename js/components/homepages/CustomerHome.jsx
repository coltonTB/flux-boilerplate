var React = require('react'),
    JobList = require('../JobList.jsx'),
    RequestJob = require('../RequestJob.jsx'),
    Link = require('react-router').Link;

var CustomerHome = React.createClass({

  propTypes: {
    jobList: React.PropTypes.array.isRequired
  },

  render: function() {
    return (<div> 
      <h2>Your Jobs</h2>
      <Link className="request-job" to="/requestjob">
        Request a Job
      </Link>
      <JobList jobs={this.props.jobList} />
    </div>);
  }

});

module.exports = CustomerHome;