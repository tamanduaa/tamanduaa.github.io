var http = require('http');

http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello, class!');
    response.end('Goodbye, class!');
}).listen(3000, function () {
    console.log('listening on port 3000');
});