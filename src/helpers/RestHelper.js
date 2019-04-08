"use strict";
var $ = require('jquery');

module.exports = {
	get: function (url) {
		return new Promise(function (success, error) {
			$.ajax({
				url: url,
				dataType: "json",
				success: success,
				error: error
			});
		}).catch(function (err) {
			console.log(err);
		});
	},

	post: function (url, data) {
		return new Promise(function (success, error) {
			$.ajax({
				url: url,
				type: "POST",
				data: data,
				success: success,
				error: error
			});
		});
	},

	patch: function (url, data) {
		return new Promise(function (success, error) {
			$.ajax({
				url: url,
				type: "PATCH",
				data: data,
				success: success,
				error: error
			});
		});
	}
};