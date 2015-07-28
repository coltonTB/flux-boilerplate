var React = require('react'),
    SessionStore = require('../../stores/SessionStore.js'),
    JobsStore = require('../../stores/JobsStore.js'),
    JobsActions = require('../../actions/JobsActions.js');

var LoggedOutHome = require('./LoggedOutHome.jsx'),
    PandaHome = require('./PandaHome.jsx'),
    CustomerHome = require('./CustomerHome.jsx'),
    AdminHome = require('./AdminHome.jsx');

var setStateLoadedFn;

var Home = React.createClass({

  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  getInitialState: function() {
    return {
      jobList: JobsStore.getJobList(),
      jobsState: 'loading' 
    };
  },

  componentDidMount: function() {
    // keep a reference to this function so we can
    // remove it when the component unmounts
    setStateLoadedFn = function() {
      this.setState({
        jobList: JobsStore.getJobList(),
        jobsState: 'loaded'
      });
    }.bind(this);
    JobsActions.getJobs();
    JobsStore.on('loaded', setStateLoadedFn);
  },

  componentWillUnmount: function () {
    JobsStore.removeListener('loaded', setStateLoadedFn);  
  },

  render: function() {

    if (!this.props.isLoggedIn) {
      return <LoggedOutHome />;
    }else{
      var userType = SessionStore.getUserType();
      if (userType === 'panda') {
        return <PandaHome jobList={this.state.jobList}/>
      }else if(userType === 'customer'){
        return <CustomerHome jobList={this.state.jobList}/>
      }else if (userType === 'admin'){
        return <AdminHome jobList={this.state.jobList}/>
      }else{
        return <LoggedOutHome />
      }
    }
  }

});

module.exports = Home;