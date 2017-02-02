

module.exports ={
	get : function(req,res){
				var result = {
					name:req.session.name, 
					email : req.session.email
				}
				console.log(result);
				//console.log(req.session);


         res.render('logout',{result : result});
	},
	post : function(req,res){
           console.log(res.body);
           //console.log(req.session);
         
         req.session.destroy(function(){
        
         });
         return res.json('logout');
	}
}