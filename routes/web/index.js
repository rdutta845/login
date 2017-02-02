var express = require('express');
var router = express.Router();

var signup = require('./signup');
var login = require('./login');
var logout = require('./logout');
var welsign = require('./welsign');
/* GET home page. */

var checkSes=function(req,res,next){

if(req.session.email){
	next();
}else{
	console.log('login first');
	return res.render('login');
	
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
  res.render('index', { title: 'LogicSquare Technologies' });
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

router.get('/welsign/:name',welsign.get);

module.exports = router;
