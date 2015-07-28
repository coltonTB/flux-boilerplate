var React = require('react/addons'),
    Navigation = require('react-router').Navigation;

var SignupConfirmed = React.createClass({

  mixins: [
    React.addons.LinkedStateMixin, 
    Navigation
  ],

  componentWillMount: function() {
    console.log(this.props.params.code);
  },

  getInitialState: function() {
    return {
      firstname: '',
      lastname: '',
      infoA: '',
      infoB: '',
      infoC: '' 
    };
  },

  _submitForm: function() {
    this.transitionTo('/profile');
  },

  render: function() {
    return (
      <div id="sign-up">
        <h3>Please complete your profile</h3>
        <input valueLink={this.linkState('firstname')} placeholder="Fist Name"/><br/>
        <input valueLink={this.linkState('lastname')} placeholder="Last Name"/><br/>
        <input valueLink={this.linkState('infoA')} placeholder="Info A"/><br/>
        <input valueLink={this.linkState('infoB')} placeholder="Info B"/><br/>
        <input valueLink={this.linkState('infoC')} placeholder="Info C"/>

        <button onClick={this._submitForm}>submit</button>
      </div>
    );
  }

});

module.exports = SignupConfirmed;