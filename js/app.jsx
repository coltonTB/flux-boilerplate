var React = require('react'),
    Router = require('react-router'),
    AppController = require('./components/AppController.jsx'),
    Hello = require('./components/Hello.jsx'),
    Home = require('./components/Home.jsx'),
    Route = Router.Route;

// declare our routes and their hierarchy
var routes = (
  <Route handler={AppController}>
    <Route path="hello" handler={Hello}/>
    <Route path="home" handler={Home}/>
  </Route>
);


Router.run(routes, Router.HashLocation, function(Root){
  React.render(<Root/>, document.getElementById('main'));
});
