var restify = require('restify');
exports.function123 = function(req, res, next) {
  res.send('product api service is running');
};

exports.getProducts = function(req, res, next) {
  res.send(products);
};

var products = [
  {"id":"1", "name":"Applle I Phone6", "price":"604"},
  {"id":"2", "name":"Applle I Phone5", "price":"404"},
];
