var React = require('react'),
    Router = require('react-router'),
    AppController = require('./components/AppController.jsx'),
    Hello = require('./components/Hello.jsx'),
    Home = require('./components/Home.jsx'),
    Route = Router.Route;

var routes = (
  <Route path="/" handler={AppController}>
    <Route path="hello" handler={Hello}/>
    <Route path="" handler={Home}/>
  </Route>
);

module.exports = routes;