var React = require('react'),
    Nav = require('../actions/NavigationActionCreator.js');

var Navbar = React.createClass({

  getDefaultProps: function() {
    return {
      selectedState: 'home'
    };
  },

  render: function() {

    var sel = this.props.selectedState;

    return (
      <div id="navbar">
        <span>Navbar</span>
        <button className={sel === 'home' ? 'selected':''}
                onClick={this._navHome}>
          home
        </button>
        <button className={sel === 'hello' ? 'selected':''}
                onClick={this._navProfile}>
          hello
        </button>
      </div>
    );
  },

  _navHome: function(){
    Nav.navigateTo('home');
  },

  _navProfile: function(){
    Nav.navigateTo('hello');
  }

});

module.exports = Navbar;