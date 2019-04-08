/*eslint-disable strict */

var createClass = require('create-react-class');
var React = require('react');
var Header = require('./common/header');
var Footer = require('./common/footer');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
$ = jQuery = require('jquery');
var tutorialStore = require('./../stores/TutorialStore.js');
var initial = tutorialStore.getItems();
var List = require('./list');
var search = tutorialStore.getsearchresults();
var currentlink = tutorialStore.getcurrentvideo();
var App = createClass({
    render: function () {
        return (
            <div>
                <RouteHandler items={initial} currentlink={currentlink} searchresults={search}/>
            </div>

        );
    }
});
tutorialStore.onChange(function (items) {
    initial = items;
});
tutorialStore.onSearchChange(function (searchitems) {
    search = searchitems;
});
tutorialStore.onVideoChange(function (currentvideo) {
    currentlink = currentvideo;
});

module.exports = App;