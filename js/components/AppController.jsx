var React = require('react'),
    Navbar = require('./Navbar.jsx'),
    NavigationStore = require('../stores/NavigationStore.js');

var SeekPanda = React.createClass({

  getInitialState: function() {
    return {
      navigationState: 'home' 
    };
  },

  componentDidMount: function() {
    NavigationStore.on('navigate', function(state){
      this.setState({
        navigationState: state
      })
    }.bind(this));
  },

  render: function() {

    var content = ({
      'home' : 'Welcome Home',
      'hello': 'Hello World!'
    })[this.state.navigationState];

    return (<div>
      <Navbar selectedState={this.state.navigationState}/>
      <div id="content">
        {content}
      </div>
    </div>);
  }

});

module.exports = SeekPanda;