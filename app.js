var http = require('http');
var fs = require('fs');
var path = require('path'); // Import the 'path' module

http.createServer(function (req, res) {
    var filePath = path.join(__dirname, req.url); // Construct the file path

    // Read the file asynchronously
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle file not found error
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end();
        } else {
            // Determine content type based on file extension
            var contentType = 'text/html';
            if (filePath.endsWith('.css')) {
                contentType = 'text/css';
            }

            // Serve the file with the appropriate content type
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
        }
    });
}).listen(5580);
