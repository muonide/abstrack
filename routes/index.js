var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', {title: 'Arkansas Balloon', page: 'home' });
});

// using a seperate file for routes to handle actions specific to that route
var missions = require('../routes/missions');
router.use('/missions', missions);

var missions = require('../routes/prediction');
router.use('/prediction', missions);

var missions = require('../routes/found');
router.use('/found', missions);

// router.get('/recovery', function(req, res, next){
//   res.render('recovery');
// });

// router.get('/about', function(req, res, next){
//   res.render('about');
// }); 

// must be at the bottom, will take precedence over other views
router.get('*', function(req, res){
  res.render('error', {title: 'Error 404'});
});

module.exports = router;
