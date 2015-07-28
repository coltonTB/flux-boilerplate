var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Redirect = Router.Redirect;

var AppController = require('./components/AppController.jsx'),
    LogIn = require('./components/LogIn.jsx'),
    Profile = require('./components/Profile.jsx'),
    RequestJob = require('./components/RequestJob.jsx'),
    HomeController = require('./components/homepages/HomeController.jsx'),
    SignUpForm = require('./components/signup/SignUpForm.jsx'),
    SignUpWait = require('./components/signup/SignUpWait.jsx'),
    SignUpConfirmed = require('./components/signup/SignUpConfirmed.jsx');

var routes = (
  <Route path="/" handler={AppController}>
    <Route path="/login" handler={LogIn}/>
    <Route path="/profile" handler={Profile}/>
    <Route path="/requestjob" handler={RequestJob}/>
    <Route path="" handler={HomeController}/>

    <Route path="signup/1" handler={SignUpForm}/>
    <Route path="signup/2" handler={SignUpWait}/>
    <Route path="signup/3/:code" handler={SignUpConfirmed}/>
    <Redirect from="signup" to="signup/1"/>

  </Route>
);

module.exports = routes;