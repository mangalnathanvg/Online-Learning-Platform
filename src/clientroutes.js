"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var clientroutes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute name="home" handler={require('./components/homePage')} />
        <Route name="content" handler={require('./components/Content Viewer/hello')} />
        <Route name="aboutpage" handler={require('./components/about/aboutPage')} />
        <Route name="search" handler={require('./components/searchContent')} />
        <Route name="view" path="/:url" handler={require('./components/Content Viewer/contentViewer')} />
       
    </Route>
);

module.exports = clientroutes;
