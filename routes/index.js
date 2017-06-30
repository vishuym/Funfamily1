var express = require('express');
var router = express.Router();

router
.route('/json')
.get(function(req,res){

  console.log("Get json");
  res
  .status(200)
  .json({"Express":true});

})
.post(function(req,res,next){
  console.log("Post json");
  res
  .status(200)
  .json({"Express": "Post Received" });


});



module.exports=router;
