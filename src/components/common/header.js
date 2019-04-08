"use strict";

var React = require('react');
var createClass = require('create-react-class');
var Router = require('react-router');
var Link = Router.Link;

var Header = createClass({
    render: function () {
        return (

            <nav className="navbar navbar-default navbar-fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="logoimage" src="images/newlogo2.png" />
                    </a>

                    <ul className="nav navbar-nav navbar-center">
                        <li className="nav home"><Link to="app">Home</Link></li>
                        <li className="nav about"><Link to="aboutpage">About</Link></li>
                    </ul>

                </div>
            </nav>
        );
    }
});

module.exports = Header;