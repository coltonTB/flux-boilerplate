var React = require('react'),
    JobListItem = require('./JobListItem.jsx');

var JobList = React.createClass({

  propTypes: {
    jobs: React.PropTypes.array.isRequired
  },

  render: function() {

    var jobs = this.props.jobs.map(function(job, i){
      return <JobListItem job={job} key={i} />
    });

    return (
      <div className="job-list">
        {jobs}
      </div>
    );
  }

});

module.exports = JobList;