"use strict";

var React = require('react');
var createReactClass = require('create-react-class');
var action = require('./../../actions/TutorialActionCreator');
var CommentComponent = require('./commentComponent');
var List = require('../list');
var ContentViewer = createReactClass({
    setInitialState: function () {
        return { username: "", comment: "", title: "", author: "", description: "" };

    },
    handleUserName: function (e) {
        this.setState({ username: e.target.value });
    },
    addcomment: function (e) {
        e.preventDefault();
        var data = this.state.username + " : " + this.state.comment + "|";
        action.comment({ comment: data, name: this.props.params.url });
    },
    addDescription: function (e) {
        e.preventDefault();
        action.addDes({ des: this.state.description, title: this.state.title, author: this.state.author, name: this.props.params.url });
    },
    handleDesciption: function (e) {
        this.setState({ description: e.target.value });
    },
    handleTitle: function (e) {
        this.setState({ title: e.target.value });
    },
    handleAuthor: function (e) {
        this.setState({ author: e.target.value });
    },
    handleComment: function (e) {
        this.setState({ comment: e.target.value });
    },
    render: function () {
        var an = this.props.params.url;
        if (an !== this.props.currentlink) {
            console.log(an, "  ", this.currentlink);
            action.switch({ link: an });
            console.log(an, " ", this.props.currentlink);
        }
        if ((this.props.params.url).split('.')[1] === "pdf") {
            return (
                <div>

                    <div className="row">
                        <div className="col-sm-6">
                            <List items={this.props.items} />
                        </div>

                        <div className="col-sm-6">
                            <div>

                                {
                                    this.props.items.map(function (item, index) {
                                        if (item.name === an) {
                                            return (<h1 className="center-block" style={{ color: 'white' }}>{item.title}</h1>);
                                        }
                                    })
                                }
                            </div>
                            <div className="container-fluid">
                                <div className="container pdfsection1">
                                    <object type="application/pdf" width="800" height="840" data={"http://127.0.0.1:8887/resourceslp/" + this.props.params.url}></object>
                                </div>
                                <div>
                                    <h2 style={{ marginLeft: '-300px', color: 'white', fontWeight: 'bold' }}> Description: </h2>
                                    {
                                        this.props.items.map(function (item, index) {
                                            if (item.name === an) {
                                                return (<p className="center-block" style={{ fontSize: '30px', color: 'white', marginLeft: '-200px' }}>{item.description}</p>);
                                            }
                                        })
                                    }
                                </div>
                                <div>
                                    <br />
                                    <h2 style={{ marginLeft: '-300px', color: 'white', fontWeight: 'bold' }}> Comments: </h2>
                                    {
                                        this.props.items.map(function (item, index) {
                                            if (item.name === an) {
                                                var commentArr = [];
                                                commentArr = item.comments.split("|");
                                                var nameHead = [];
                                                var commentContent = [];
                                                for (var i = 0; i < commentArr.length - 1; i++) {
                                                    nameHead.push(commentArr[i].split(":")[0]);
                                                    commentContent.push(commentArr[i].split(":")[1]);
                                                }

                                                return (
                                                    <div>
                                                        {
                                                            commentArr.map(function (val, indecs) {
                                                                return (
                                                                    <div>
                                                                        <CommentComponent Name={val.split(":")[0]} Content={val.split(":")[1]} />

                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>

                                                );
                                            }
                                        })
                                    }
                                </div>
                                <div className="add-comment text-center">
                                    <form onSubmit={this.addcomment}>
                                        <input style={{ fontSize: '20px', padding: '3px' }} className="form-control" value={this.setInitialState.username} onChange={this.handleUserName} placeholder="Name" /> <br /> <br />
                                        <textarea style={{ height: '200px', fontSize: '20px' }} className="form-control text-area" type="text" value={this.setInitialState.comment} onChange={this.handleComment} placeholder="Comment" /> <br /> <br />
                                        <button className="btn btn-primary" style={{ fontSize: '20px', padding: '8px' }}>Post Comment</button> <br /> <br />

                                    </form>
                                </div>
                                <h2 style={{ marginLeft: '-300px', color: 'white', fontWeight: 'bold' }}> Edit Description: </h2>
                                <div className="add-comment text-center">
                                    <form onSubmit={this.addDescription}>
                                        <input style={{ fontSize: '20px', padding: '3px' }} className="form-control" value={this.setInitialState.title} onChange={this.handleTitle} placeholder="Title" /> <br /> <br />
                                        <textarea style={{ height: '200px', fontSize: '20px' }} className="form-control text-area" type="text" value={this.setInitialState.description} onChange={this.handleDesciption} placeholder="Description" /> <br /> <br />
                                        <button className="btn btn-primary" style={{ fontSize: '20px', padding: '8px' }}>Update description</button> <br /> <br />
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>

                    <div className="row">
                        <div className="col-sm-6">
                            <List items={this.props.items} />
                        </div>

                        <div className="col-sm-6">
                            <div>

                                {
                                    this.props.items.map(function (item, index) {
                                        if (item.name === an) {
                                            return (<h1 className="center-block" style={{ color: 'white' }}>{item.title}</h1>);
                                        }
                                    })
                                }
                            </div>
                            <div className="container-fluid center-block">

                                <div className="container pdfsection1">
                                    <video width="640" height="480" controls>
                                        <source src={"http://127.0.0.1:8887/resourceslp/" + this.props.params.url} type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <h2 style={{ marginLeft: '-300px', color: 'white', fontWeight: 'bold' }}> Description:</h2>
                                    <div>
                                        {
                                            this.props.items.map(function (item, index) {
                                                if (item.name === an) {
                                                    return (<p className="center-block" style={{ marginLeft: '-200px', fontSize: '30px', color: 'white' }}>{item.description}</p>);
                                                }
                                            })
                                        }
                                    </div>
                                    <br />
                                    <h2 style={{ marginLeft: '-300px', color: 'white', fontWeight: 'bold' }}> Comments: </h2>
                                    {
                                        this.props.items.map(function (item, index) {
                                            if (item.name === an) {
                                                var commentArr = [];
                                                commentArr = item.comments.split("|");
                                                var nameHead = [];
                                                var commentContent = [];
                                                for (var i = 0; i < commentArr.length - 1; i++) {
                                                    nameHead.push(commentArr[i].split(":")[0]);
                                                    commentContent.push(commentArr[i].split(":")[1]);
                                                }

                                                return (
                                                    <div>
                                                        {
                                                            commentArr.map(function (val, indecs) {
                                                                return (
                                                                    <div>
                                                                        <CommentComponent Name={val.split(":")[0]} Content={val.split(":")[1]} />

                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>

                                                );
                                            }
                                        })
                                    }
                                </div>
                                <div className="add-comment text-center">

                                    <form onSubmit={this.addcomment}>
                                        <input style={{ fontSize: '20px', padding: '3px' }} className="form-control" value={this.setInitialState.username} onChange={this.handleUserName} placeholder="Name" /> <br /> <br />
                                        <textarea style={{ height: '200px', fontSize: '20px' }} className="form-control text-area" type="text" value={this.setInitialState.comment} onChange={this.handleComment} placeholder="Comment" /> <br /> <br />
                                        <button className="btn btn-primary" style={{ fontSize: '20px', padding: '8px' }}>Post</button> <br /> <br />

                                    </form>
                                </div>
                                <h2 style={{ marginLeft: '-300px', color: 'white', fontWeight: 'bold' }}> Edit Description </h2>
                                <div className="add-comment text-center">
                                    <form onSubmit={this.addDescription}>
                                        <input style={{ fontSize: '20px', padding: '3px' }} className="form-control" value={this.setInitialState.title} onChange={this.handleTitle} placeholder="Title" /> <br /> <br />
                                        <textarea style={{ height: '200px', fontSize: '20px' }} className="form-control text-area" type="text" value={this.setInitialState.description} onChange={this.handleDesciption} placeholder="Description" /> <br /> <br />
                                        <button className="btn btn-primary" style={{ fontSize: '20px', padding: '8px' }}>Update description</button> <br /> <br />
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            );
        }

    }
});

module.exports = ContentViewer;