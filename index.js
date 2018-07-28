const http = require('http');

const colors = require('colors');

const handleserver = function (req, res){
    res.writeHead(200, { 'content-type': 'text/html' });
res.write('<h1> Hola mundo</h1>');
res.end();
}

const server = http.createServer(handleserver);

server.listen(3000, function(){
    console.log('server on port 3000'.yellow)
});