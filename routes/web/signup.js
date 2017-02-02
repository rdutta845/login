var User = require('../../models/user');

module.exports = {
	
	get : function(req, res){

		res.render('signup');
	},
	post : function(req, res){

		var data = req.body;

		var user = new User(data);
		


		user.save(function(err, result){

			if(err){

				return res.json({error : true, reason : err});
			}else{
			return res.json({error : false, result : result});
			}
		});
	}
}