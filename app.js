// var express = require('express');
// var app = express();
var port = process.env.PORT;

var http = require('http');

var server = http.createServer(function(req,res){
  var header = req.headers;
    var os = header['user-agent'].match(/\(([\w\s.;_|]+)\)/)[1];
    var ip = header['host'];
    var lang = header['accept-language'].split(',')[0];
    res.end(JSON.stringify({
      ipaddress : ip,
      language : lang,
      software : os
    }));
});

// app.get('/',function(req,res){
//   var header = req.headers;
//   var os = header['user-agent'].match(/\(([\w\s.;_|]+)\)/)[1];
//   var ip = header['host'];
//   var lang = header['accept-language'].split(',')[0];
//   res.end(JSON.stringify({
//     ipaddress : ip,
//     language : lang,
//     software : os
//   }));
// });
//
// app.listen(port || 8001);
server.listen(port || 8001);
