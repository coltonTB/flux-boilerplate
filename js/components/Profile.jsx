var React = require('react');

var Profile = React.createClass({

  propTypes: {
    profile: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        Profile Page!
      </div>
    );
  }

});

module.exports = Profile;