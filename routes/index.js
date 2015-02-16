var path = require('path');

var routes = {};

routes.home = function(req, res) {
  res.render('home', {'version': '1',
                      'body': 'test',
                      'image': ''});
}

routes.one = function(req, res) {
  res.render('image', {})
}

module.exports = routes;