var React = require('react'),
    Navigation = require('react-router').Navigation;

var Profile = React.createClass({

  mixins: [Navigation],

  propTypes: {
    profile: React.PropTypes.object.isRequired,
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  componentWillMount: function() {
    if(!this.props.isLoggedIn){
      this.replaceWith('/')
    }
  },

  render: function() {
    
    if (!this.props.isLoggedIn) return <div/>;

    return (
      <div>
        Profile Page!
      </div>
    );
  }

});

module.exports = Profile;