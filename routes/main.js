var espress = require('express');
var app = express();


app.get('/main',function(req, res){
  res.render('main');
});

module.exports = app;
