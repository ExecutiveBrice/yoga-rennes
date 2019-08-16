
var express = require('express');
var server = express();
var options = {
index: 'index.html'
};
server.use('/', express.static('/dist/yoga', options));
server.listen(process.env.PORT);