var http = require('http');
var fs = require('fs');
var url = require('url');
var chat = require('./chatServer');

var ip = '127.0.0.1';
var count = 0;
var extMap = {};

extMap["html"] = "text/html";
extMap["js"] = "text/plain";
extMap["jpg"] = "image/jpeg";
extMap["css"] = "text/plain";

var fileType = function(filename){
	var ext = filename.substring(filename.lastIndexOf('.')+1);
	console.log(ext);
	return extMap[ext];
};

//for https only need to rewrite http to https and:

// if no pfx
/*var options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};*/

//else
/*var options = {
  pfx: fs.readFileSync('server.pfx')
};*/

var errorPage = function(res){
	fs.readFile('./error/notfound.html',function(err, data){
		res.writeHead(404,{'Content-Type' : 'text/html'});
			res.write(data);
			res.end();

	});
};

var processReq = function(req,res){

	var pathname = url.parse(req.url).pathname;
	console.log(pathname);
	if(pathname.length < 2) pathname = 'index.html';
	
	fs.readFile('./'+pathname,function(err,data){
		
		if(err){
			errorPage(res);
			return;
		}

		res.writeHead(200, {'Content-Type': fileType(pathname)});
		res.write(data);
		res.end();
	});
};

http.createServer(function (req, res) {
 	++count;
 	//console.log(req.url +' '+ count);
 	processReq(req,res);
}).listen(8080);

chat.model();

//console.log('Server running at http://'+ip+'/');