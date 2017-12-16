var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('prediction', {title: 'Prediction'});
});

module.exports = router;