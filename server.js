var http = require('http');
var url = require('url');

var port = process.env.PORT || 12345;
http.createServer(function(proxyReq, proxyResp) {
    var params = url.parse(proxyReq.url, true);
    var imgURL = "http://" + params.query.src;

    var destParams = url.parse(imgURL);

    var reqOptions = {
        host : destParams.host,
        port : 80,
        path : destParams.pathname,
        method : "GET"
    };

    var req = http.request(reqOptions, function(res) {
        var headers = res.headers;
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Access-Control-Allow-Headers'] = 'X-Requested-With';
        proxyResp.writeHead(200, headers);

        res.on('data', function(chunk) {
            proxyResp.write(chunk);
        });

        res.on('end', function() {
            proxyResp.end();
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
        proxyResp.writeHead(503);
        proxyResp.write("An error happened!");
        proxyResp.end();
    });
    req.end();

}).listen(port);