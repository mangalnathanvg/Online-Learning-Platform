"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var createClass = require('create-react-class');
var Header = require('./common/header');
var Footer = require('./common/footer');
var action = require('./../actions/TutorialActionCreator.js');
var Home = createClass({
    search: function (e) {
        e.preventDefault();
        action.search({ name: this.state.input });
    },
    getInitialState: function () {
        return { input: "" };
    },
    handleSearchInput: function (e) {
        this.setState({ input: e.target.value });
    },
    render: function () {
        return (
            <div>
                <Header />
                <div className="jumbotron jumbo">
                    <div className="container-fluid text-center">
                        <h1>DisCern</h1>
                        <p>A one stop solution for a light-weight content management system.</p>
                    </div>
                </div>
                <div className="container-fluid text-center section_2">
                <div className="row">
                <div className="col-sm-6">
                <Link to="search">
                    <img src="http://127.0.0.1:8887/LP%20BE/src/images/Search.png" className="videoimg center-block" />
                    <h2 style={{ color: 'white' }}>Search Content</h2>
                    </Link>
                </div>
                <div className="col-sm-6">
                <Link to="content">
                    <img src="http://127.0.0.1:8887/LP%20BE/src/images/content.png" className="videoimg center-block" />
                    <h2 style={{ color: 'white' }}>View Content</h2>
                    </Link>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>



        );
    }
});

module.exports = Home;