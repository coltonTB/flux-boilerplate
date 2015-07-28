var React = require('react/addons'),
    Navigation = require('react-router').Navigation,
    Link = require('react-router').Link;

var SignUp = React.createClass({

  mixins: [
    React.addons.LinkedStateMixin,
    Navigation
  ],

  getInitialState: function() {
    return {
      email: '',
      password: '',
      password2: '',
      pandaSignup: true,
      customerSignup: false
    };
  },

  _signUp: function() {  
    this.transitionTo('/signup/2');
  },

  _selectIsPanda: function() {
    this.setState({
      pandaSignup: true,
      customerSignup: false
    });
  },

  _selectIsCustomer: function() {
    this.setState({
      pandaSignup: false,
      customerSignup: true
    });
  },

  render: function() {
    return (<div id="sign-up">

      <input type="checkbox" 
             checked='true'
             readOnly='true'/>
      <span>I am a translator</span>
      <br/>
      <Link to="/requestjob">I need a translator</Link>

      <input type="email"
             valueLink={this.linkState('email')}
             placeholder="email"/>
      <input type="password" 
             valueLink={this.linkState('password')}
             placeholder="password"/>
      <input type="password" 
             valueLink={this.linkState('password')}
             placeholder="confirm password"/>
      <button onClick={this._signUp}>Sign Up</button>
    </div>);
  }

});

module.exports = SignUp;