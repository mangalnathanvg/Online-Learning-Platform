"use strict";

var React = require('react');
var createReactClass = require('create-react-class');
var Router = require('react-router');
var Link = Router.Link;


var List = createReactClass({
    render: function () {
        return (
            <div className="listcontainer">
                <h3> <Link to="home">Home</Link> </h3>
                <h2>PDF files </h2>
                {this.props.items.map(function(item, index){
                    if(item.name.split('.')[1] === "pdf") {
                    return (
                            <div>
                                <h3> <Link to={"/" + item.name}>{item.name}</Link></h3>
                            </div>);
                    }
                                })
                            }
                <h2>Videos </h2>
                {this.props.items.map(function(item, index){
                    if(item.name.split('.')[1] === "mp4") {
                    return (
                            <div>
                                <h3> <Link to={"/" + item.name}>{item.name}</Link></h3>
                            </div>);
                    }
                                })
                            }
            </div>
        );
    }

});


module.exports = List;