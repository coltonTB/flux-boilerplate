var React = require('react'),
    SessionStore = require('../stores/SessionStore.js'),
    LoggedOutHome = require('./homepages/LoggedOutHome.jsx'),
    PandaHome = require('./homepages/PandaHome.jsx'),
    CustomerHome = require('./homepages/CustomerHome.jsx'),
    AdminHome = require('./homepages/AdminHome.jsx'),
    Router = require('react-router'),
    Navigation = Router.Navigation;

var Home = React.createClass({

  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render: function() {

    if (!this.props.isLoggedIn) {
      return <LoggedOutHome />;
    }else{
      var userType = SessionStore.getUserType();
      if (userType === 'panda') {
        return <PandaHome />
      }else if(userType === 'customer'){
        return <CustomerHome />
      }else if (userType === 'admin'){
        return <AdminHome />
      }
    }
  }

});

module.exports = Home;