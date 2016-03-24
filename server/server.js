var express = require("express");
var path    = require("path");

var server = express();

server.use(express.static('build'));

server.get('*', function (req, res) {
  res.sendFile(path.resolve("build/index.html"));
});

var listener = server.listen(process.env.PORT || 8080, function () {
  console.log("Express server listening on port %d", listener.address().port)
});
