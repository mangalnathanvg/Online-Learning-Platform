module.exports = function (app)
{
	var TutItem = require('./../models/TutItem.js');


app.route('/api/items')
.get(function(req,res){
	TutItem.find(function(error,doc){
		res.send(doc);
	})
	
})
.post(function(req,res){
	var item = req.body;
	var tutItem = new TutItem(item);
	tutItem.save(function(err,data){
		res.status(300).send();
	})
})

app.route('/api/items/:id')
.patch(function(req,res){
	TutItem.findOne({
		_id:req.body._id 
	},function(error,doc){
		for(var key in req.body){
			doc[key] = req.body[key];
		}
		doc.save();
		res.status(200).send();
	})
})

}