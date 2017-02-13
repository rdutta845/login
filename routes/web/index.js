var express = require('express');
var router = express.Router();

var signup = require('./signup');
var login = require('./login');
var logout = require('./logout');
var welsign = require('./welsign');
var short = require('./shorturl');
//var error = require('./index');
/* GET home page. */

var checkSes=function(req,res,next){

if(req.session.email){
	next();
}else{
	console.log('login first');
	return res.redirect('/login');
	
	}
}
var checkLog=function(req,res,next){
	if(!req.session.email){
	next();
}else{
	res.redirect('/logout')
	console.log('logout first');
	// return res.render('logout',{result :{name : req.session.name, email : req.session.email}});
	
	}
}
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Host : Rahul Dutta' });
});

router.get('/signup',signup.get);
router.post('/signup',signup.post);

router.get('/login',checkLog,login.get);
router.post('/login',checkLog,login.post);

/*router.get('/welcom',function(req,res){
	res.render("logout");
});*/
router.get('/logout',checkSes,logout.get);
router.post('/logout',checkSes,logout.post);
router.get('/map',logout.map);

router.get('/welsign/:name',welsign.get);
//router.get('/welsign',welsign.any);

router.get('/shorturl',short.get);
router.post('/shorturl',short.post);
router.get('/:id',short.get1);

module.exports = router;
