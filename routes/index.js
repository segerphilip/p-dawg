var path = require('path');

var routes = {};

routes.home = function(req, res) {
  res.render('home', {'body': 'Testing!'});
}

routes.one = function(req, res) {
  
}

module.exports = routes;