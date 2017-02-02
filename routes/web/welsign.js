var User = require('../../models/user');

module.exports = {
	
	get : function(req, res){

		res.render('welsign',{name : req.params.name});
	}
}