var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', {title: 'Arkansas Balloon', home: true});
});

router.get('/missions', function(req, res, next){
  res.render('missions', {title: 'Missions'});
});


router.get('/prediction', function(req, res, next){
  res.render('prediction', {title: 'Prediction'});
});


// router.get('/recovery', function(req, res, next){
//   res.render('recovery');
// });

router.get('/found', function(req, res, next){
  res.render('found');
});


// router.get('/about', function(req, res, next){
//   res.render('about');
// }); 



// must be at the bottom, will take precedence over other views
router.get('*', function(req, res){
  res.render('error', {title: 'Error 404'});
});

module.exports = router;
