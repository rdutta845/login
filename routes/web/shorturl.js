var express = require('express');
var router = express.Router();
var Url = require('../../models/shorturl');
var shortid = require('shortid');


module.exports = {
get :  function (req, res, next) {
	console.log("inside get request");
	Url.find({}).exec(function(err, url){
		res.render('short',{url : url});
	})
},

get1 : function (req, res, next) {
	console.log("inside get1 request");
  Url.findOne({short : req.params.id})
  .exec(function (err,url){
  	// return res.render('list',{url:url})
  	if(err || url==null){
  		return res.json(err);
  	}
  	var match = url.name.match(/^https:\/\/|http:\/\//);
  	if (match === null) {
  		// console.log('http://'+url.originalUrl);
  		res.redirect('http://'+url.name);
  	} else {
  		res.redirect(url.name);
  	}
  	
  });
},





post :  function (req,res,next){
	console.log("inside post request");
	var sid = shortid.generate();
	 console.log(sid);
	var data = {'name': req.body.actual, 'short': sid};
	 console.log(data)
	var url = new Url(data);
	url.save(function (err,result){
		console.log(result);
		if(err){
			return res.json({error: true, reason:err});
		}else{
		return res.json({error: false, obj : result });
			}
		}); 
	}

}
