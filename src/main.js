"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var clientroutes = require('./clientroutes');
var App = require('./components/app');
var testing = [{ name: "test" }];
var tutorialStore = require('./stores/TutorialStore.js');
var initial = tutorialStore.getItems();
var search = tutorialStore.getsearchresults();
var currentlink = tutorialStore.getcurrentvideo();
function render() {
	Router.run(clientroutes, function (Handler) {
		React.render(<Handler />, document.getElementById('app'));
	});
}

tutorialStore.onChange(function (items) {
	initial = items;
	render();
});
tutorialStore.onSearchChange(function (searchitems) {
	search = searchitems;
	render();
});
tutorialStore.onVideoChange(function (currentvideo) {
	currentlink = currentvideo;
	render();
});

render();