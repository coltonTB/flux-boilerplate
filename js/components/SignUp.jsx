var React = require('react/addons');

var SignUp = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      email: '',
      password: '',
      password2: '' 
    };
  },

  _signUp: function(){  
    console.log(this.state);
  },

  render: function() {
    return (<div id="sign-up">
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