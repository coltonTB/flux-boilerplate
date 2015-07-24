var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes.jsx');

Router.run(routes, Router.HashLocation, function(Root){
  React.render(React.createElement(Root),
    document.getElementById('main'));
});
