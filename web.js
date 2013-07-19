var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var body = fs.readFileSync("index.html", "utf-8");
console.log("Body:"+body);
app.get('/', function(request, response) {
  
  response.send(body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
