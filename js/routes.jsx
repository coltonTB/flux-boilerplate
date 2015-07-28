var React = require('react'),
    Router = require('react-router'),
    AppController = require('./components/AppController.jsx'),
    LogIn = require('./components/LogIn.jsx'),
    Home = require('./components/Home.jsx'),
    Profile = require('./components/Profile.jsx'),
    SignUp = require('./components/SignUp.jsx'),
    Route = Router.Route;

var routes = (
  <Route path="/" handler={AppController}>
    <Route path="/login" handler={LogIn}/>
    <Route path="/signup" handler={SignUp}/>
    <Route path="/profile" handler={Profile}/>
    <Route path="" handler={Home}/>
  </Route>
);

module.exports = routes;