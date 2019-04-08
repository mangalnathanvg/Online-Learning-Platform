var mongoose = require('mongoose');

var TutorialItemSchema = {
	name:String,
	filetype:String,
	description:String,
	directory:String,
	title:String,
	technology:String,
	itemtype:String,
	id:String,
	comments:String
};

var TutItem =
mongoose.model('TutItem',TutorialItemSchema,"tutitems");

module.exports = TutItem;