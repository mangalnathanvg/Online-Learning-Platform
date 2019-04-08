"use strict";
var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function TutorialStore() {
	var items = [];
	var searchresults = [];
	var listeners = [];
	var searchlisteners = [];
	var videolisteners = [];
	var pdffiles = [];
	var currentvideo = "";
	

	function triggerListeners() {
		listeners.forEach(function (listener) {
			listener(items);
		});
	}

	function triggerSearchListeners() {
		searchlisteners.forEach(function (searchlistener) {
			searchlistener(searchresults);
		});
	}

	function triggerVideoListeners() {
		videolisteners.forEach(function (videolistener) {
			videolistener(currentvideo);
		});
	}

	helper.get("api/items")
		.then(function (data) {
			items = data;
			triggerListeners();
		});
		
	function getsearchresults() {
			return searchresults;
	}
	function getItems() {
		return items;
	}
	function getcurrentvideo() {
		return currentvideo;
	}


	function switchlinks(link) {
		currentvideo = link.link;
		console.log(currentvideo);		
		triggerVideoListeners();
	}
	function getComments(name) {
		items.forEach(function (item) {
			if ((item.name) === name) {
				var temp = item.comments.replace("|", "<br />");
				return (temp);

			}		
	});
	}
	function searchTutorialItem(searchitem) {
		items.forEach(function (item) {
			if ((item.name).indexOf(searchitem.name) !== -1) {
				searchresults.push(item);

			}
			triggerSearchListeners();
		});

	}

	function addComments(comment) {
		console.log(comment.comment);
		items.forEach(function (item) {
			if((item.name) === comment.name)
				{
					item.comments += comment.comment;
					console.log(item);
					helper.patch('api/items/' + item.name, item);
				}
		});
		triggerListeners();
	}
	function addDes(val) {
		items.forEach(function (item) {
			if((item.name) === val.name)
				{
					item.description = val.des;
					item.title = val.title;
					console.log(item);
					helper.patch('api/items/' + item.name, item);
				}
		});
		triggerListeners();
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function onSearchChange(searchlistener) {
		searchlisteners.push(searchlistener);
	}

	function onVideoChange(videolistener) {
		videolisteners.push(videolistener);

	}



	dispatcher.register(function (event) {
		var split = event.type.split(':');
		if (split[0] === 'tutorial-item') {
			switch (split[1]) {
				case "add":
					addTutorialItem(event.payload);
					break;
				case "search":
					searchTutorialItem(event.payload);
					break;
				case "switch":
					switchlinks(event.payload);
					break;
				case "comment":
						addComments(event.payload);
						break;
				case "description":
						addDes(event.payload);
						break;
			}
		}
	});

	return {
		getItems: getItems,
		getsearchresults: getsearchresults,
		onChange: onChange,
		onSearchChange: onSearchChange,
		onVideoChange: onVideoChange,
		getcurrentvideo: getcurrentvideo,
		getComments: getComments
	};
}

module.exports = new TutorialStore();