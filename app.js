var express = require('express');
var app = express();
var port = process.env.PORT;

app.get('/',function(req,res){
  var header = req.headers;
  // console.log(headers);
  req.end(headers);
});

app.listen(port || 8001);
