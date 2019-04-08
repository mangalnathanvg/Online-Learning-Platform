"use strict";

var dispatcher = require('./../dispatcher.js');

module.exports = {
	search: function (item) {
		dispatcher.dispatch({
			payload: item,
			type: "tutorial-item:search"
		});
	},
	comment: function (item) {
		dispatcher.dispatch({
			payload: item,
			type: "tutorial-item:comment"
		});
	},
	addDes: function (item) {
		dispatcher.dispatch({
			payload: item,
			type: "tutorial-item:description"
		});
	},
	switch: function (item) {
		dispatcher.dispatch({
			payload: item,
			type: "tutorial-item:switch"
		});
	}
};