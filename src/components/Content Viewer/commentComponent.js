"use strict";

var React = require('react');
var createReactClass = require('create-react-class');

var CommentComponent = createReactClass({
    render: function () {
        if (this.props.Name.length === 0 || this.props.Content.length === 0) {
            return (
                <div></div>
            );
        }
        else {
            return (
                <div className="container commentcomp">
                    <br />
                    <h1>{this.props.Name + " says :"}</h1>
                    <h3 style={{ marginLeft: '60px' }}>{"\"" + this.props.Content + "\""}</h3>
                    <br />
                </div>
            );
        }
    }
});

module.exports = CommentComponent; 