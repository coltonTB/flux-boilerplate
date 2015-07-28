var React = require('react'),
    JobList = require('../JobList.jsx');

var PandaHome = React.createClass({

  propTypes: {
    jobList: React.PropTypes.array.isRequired
  },

  render: function() {
    return (<div> 
      <div>Panda Home. Here is your job summary</div>
      <JobList jobs={this.props.jobList} />
    </div>);
  }

});

module.exports = PandaHome;