var express = require('express');
var router = express.Router();

var flying = false;


router.get('/', function(req, res, next){
    res.render('prediction', {title: 'Prediction'});
});

router.get('/liveupdate', function(req, res, next){
    res.send(flying);
});

module.exports = router;