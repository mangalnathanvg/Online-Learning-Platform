"use strict";

var React = require('react');
var createReactClass = require('create-react-class');
var Header = require('./common/header');
var action = require('./../actions/TutorialActionCreator');
var Router = require('react-router');
var Link = Router.Link;
var SearchContent = createReactClass({
    setInitialState: function () {
        return { searchname: ""};

    },
    handleSearchInput: function (e) {
        this.setState({ searchname: e.target.value });
    },
    search: function (e) {
        e.preventDefault();
        action.search({ name: this.state.searchname});
    },
    render: function () {

        return (
            <div>
            <div>
                <Header />
                <h1 style={{ marginTop: '100px', fontFamily: "Roboto", color: 'white' }} className="text-center"> Search for Content available in local directory </h1>
                <form onSubmit={this.search}>
                    <input style={{ fontSize: '20px', padding: '3px', marginTop: '30px' }} className="form-control" placeholder="Search" onChange={this.handleSearchInput} />
                </form>
            </div>
            <div>
                {
                    this.props.searchresults.map(function (result, index) {
                        return (<div><h1><Link to={"/" + result.name}>{result.name}</Link><br /></h1></div>);
                    })
                }
            </div>
            </div>
        );
    }
});

module.exports = SearchContent;