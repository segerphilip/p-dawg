var path = require('path');
// var gif = require(path.join(__dirname, '../public/images/'));

var routes = {};

routes.home = function(req, res) {
  res.render('home', {'version': '0',
                      'body': 'test',
                      'page': '0',
                      'image': ''});
}

routes.one = function(req, res) {
  res.render('image', {'version': '1',
                       'body': '',
                       'page': '1',
                       'image': '../public/images/gif1.jpg'});
}

routes.two = function(req, res) {
  res.render('image', {'version': '1',
                       'body': '',
                       'page': '1',
                       'image': ''});
}

module.exports = routes;