"use strict";
var React = require('react');
var createClass = require('create-react-class');

var Footer = createClass({
    render: function () {
        return (

            <footer className="text-center footer_1">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="center-block" style={{ marginTop: '30px', fontSize: '20px' }}>CopyRight © 2018 Digital All Rights Reserved</p>
                    </div>
                    <div className="col-sm-6">
                        <div className="copyright-text" style={{ marginTop: '30px', color: 'white', fontSize: '20px' }}>
                            <p> <a href="#">Home</a> | <a href="#">Privacy</a> |<a href="#">Terms & Conditions</a></p>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
});

module.exports = Footer;