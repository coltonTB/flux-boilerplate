var React = require('react');

var JobListItem = React.createClass({

  propTypes: {
    job: React.PropTypes.object.isRequired
  },

  render: function() {
    var job = this.props.job;
    return (
      <tr>
        <td>{job.title}</td>
        <td>{job.pricePerHour}</td>
        <td>{job.estimatedDuration}</td>
        <td>{job.dateCreated}</td>
        <td>{job.creator.firstName}</td>
      </tr>
    );
  }

});

module.exports = JobListItem;