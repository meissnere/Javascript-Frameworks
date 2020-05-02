/*
  Purpose - Importing Node.JS on top of this stack
  @author - Erich Meissner
  @date - 5/1/2020
  @time - 9:40 PM
 */

var http = require("http");

var server = http.createServer(function (req, res) {
    res.write("<html>\n<body>\n    <h1>Hello from Webstorm</h1>\n</body>\n</html>");
    res.end();
});

server.listen(3000);