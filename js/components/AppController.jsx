var React = require('react'),
    Navbar = require('./Navbar.jsx'),
    Footer = require('./Footer.jsx');

content = "hello world";

var SeekPanda = React.createClass({

  render: function() {
    return (<div>
      <Navbar />
      <div id="content">
        {content}
      </div>
      <Footer />
    </div>);
  }

});

module.exports = SeekPanda;