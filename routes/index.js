var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', {title: 'Arkansas Balloon', home: true, page: 'home', home: 'active'});
});

router.get('/missions', function(req, res, next){
  res.render('missions', {title: 'Missions', missions: 'active'});
});



router.get('/predictions', function(req, res, next){
  res.render('prediction', {title: 'Predictions', prediction: 'active'});
});


router.get('/recovery', function(req, res, next){
   res.render('recovery', {title: 'Recovery', recovery: 'active'});
});

router.get('/found', function(req, res, next){
  res.render('found', {title: 'Found', found: 'active'});
});


router.get('/about', function(req, res, next){
   res.render('about', {title: 'About', about: 'active'});
}); 



// must be at the bottom, will take precedence over other views

router.get('*', function(req, res){
  console.log('Error 404');
  res.render('error', {title: 'Error 404'});
});

module.exports = router;
