"use strict";

var React = require('react');
var createReactClass = require('create-react-class');
var List = require('../list');
var Hello = createReactClass({
    render: function () {
        return (
            <div>
            <div className="row">
            <div className="col-sm-6">
            <List items={this.props.items} />
            </div>
            <div className="col-sm-6">
            <div className="container pdfsection1">
                <h1>Welcome to Content Viewer</h1>
                <h3>Click on the links on the side to open the content available</h3>
                <h4>Refresh page once if content doesn't load.</h4>
                <br />
            </div>
            </div> 
            </div>
            </div>
                );
            }
        });
        
module.exports = Hello;