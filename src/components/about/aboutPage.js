"use strict";

var React = require('react');
var Router = require('react-router');
var createClass = require('create-react-class');
var Footer = require('../../components/common/footer');
var Header = require('../common/header');
var AboutPage = createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div className="container abtsection1">
                    <h1 className="text-center abthead">About the Product</h1>
                    <div className="center-block">
                        <p className="abtcontent">DisCern aims to provide a platform for organizing team specific
                            content as curated by the team lead.
                    <h3 className="text-left" style={{ fontWeight: '700' }}>Technologies used</h3>
                            <ul>
                                <a href="https://reactjs.org/" style={{ color: 'black' }} target="_blank"><li>React</li></a>
                                <a href="https://www.npmjs.com/package/react-router" style={{ color: 'black' }} target="_blank"><li>React Router</li></a>
                                <a href="https://nodejs.org/" style={{ color: 'black' }} target="_blank"><li>Node</li></a>
                                <a href="https://gulpjs.com/" style={{ color: 'black' }} target="_blank"><li>Gulp</li></a>
                            </ul>
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
});

module.exports = AboutPage;