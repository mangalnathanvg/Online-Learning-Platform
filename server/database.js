var mongoose = require('mongoose');
var TutItem = require('./models/TutItem.js');
const fs = require('fs');
var directory = "C:/Users/MV056700/Desktop/PROJECTS/NewIntegrated/resourceslp";
var ffmetadata = require('ffmetadata');
var pdfparser = require("pdf2json");
var  ffmetadata = require("ffmetadata");

mongoose.connect('mongodb://localhost/tutorial',function(){
	console.log("connected");

	mongoose.connection.db.dropDatabase();
		var items = [];
		let files = fs.readdirSync(directory);

		files.forEach(function(value){
			var itemtype;
			if(value.split('.')[1] === "mp4" || value.split('.')[1] === "avi " || value.split('.')[1] === "wmv" )
			{
				itemtype="video";
			}
			else if(value.split('.')[1] === "pdf" || value.split('.')[1] === "txt" || value.split('.')[1] === "doc" )
			{
				itemtype="document";
			}
			else if(value.split('.')[1] === "html" )
			{
				itemtype="htmlpage";
			}
			
			var elemen = {name:value , directory:directory+'/'+value,filetype:value.split('.')[1],itemtype:itemtype,comments:"",title:"",description:""};
			items.push(elemen);
		  });
	items.forEach(function(item){
		new TutItem(item).save();
	})
})