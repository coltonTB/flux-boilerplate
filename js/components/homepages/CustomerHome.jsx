var React = require('react'),
    JobList = require('../JobList.jsx');

var CustomerHome = React.createClass({

  propTypes: {
    jobList: React.PropTypes.array.isRequired
  },

  render: function() {
    return (<div> 
      <div>Customer Home. Here are jobs</div>
      <JobList jobs={this.props.jobList} />
    </div>);
  }

});

module.exports = CustomerHome;