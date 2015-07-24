var React = require('react'),
    Nav = require('../actions/NavigationActionCreator.js')

var Navbar = React.createClass({

  render: function() {
    return (
      <div>
        <h1>HEADER</h1>
        <button onClick={this._navHome}>HOME</button>
        <button onClick={this._navProfile}>PROFILE</button>
      </div>
    );
  },

  _navHome: function(){
    Nav.navigateTo('home');
  },

  _navProfile: function(){
    Nav.navigateTo('profile');
  }

});

module.exports = Navbar;