var express=require('express');
var app= express();
var path=require('path');
var routes= require('./routes');



app.set('port',3000);
app.use(express.static(path.join(__dirname,'public')))
app.use('/',routes);



//sample data on visiting home page
// app.get('/',function (req,res) {
//   console.log("Get Homepage");
//   res
//   .status(200)
//   .sendFile(path.join(__dirname,'public','index.html'));
//
// });

// middlewear or to track or debug we can use function for specific routes
app.use(function(req,res,next){
  console.log(req.method,req.url);
  next();
});


//json data on visiting json page
app.get('/json',function (req,res) {
  console.log("Get json");
  res
  .status(200)
  .json({"Express":true});

});


//file data on visiting json page
app.get('/file',function (req,res) {
  console.log("Get file");
  res
  .status(200)
  .sendFile(path.join(__dirname,'app.js'));

});

var server =app.listen(app.get('port'),function(){
  var port=server.address().port;
  console.log("Magic on port" + port);
});
