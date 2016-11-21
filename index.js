var express = require('express');
var server = express();

var port = process.env.PORT || 3030;


server.use(express.static(__dirname+'/public'));

server.get('/', function(request,response){
  response.sendFile('public/html/index.html', {root:__dirname});
});

server.post('/', function(request,response){
  response.json(request,body);
});

server.listen(3030);
