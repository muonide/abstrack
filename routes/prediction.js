var express = require('express');
var router = express.Router();

var flying = true;
var flightCoords = [
    {lat: 35.842335, lng: -90.6788892},
    {lat: 35.875354, lng: -90.8556845},
    {lat: 42.123569, lng: -92.1365694},
    {lat: 48.456868, lng: -93.1389534},
    {lat: 52.123548, lng: -93.4656864},
];

var balloon = {
    isFlying: flying,
    coords: null
}

var index = 0;

router.get('/', function(req, res, next){
    res.render('prediction', {title: 'Prediction'});
});

router.get('/liveupdate', function(req, res, next){
    if(index < flightCoords.length)
    {
        balloon.coords = flightCoords[index];
        index++;
    }else
    {
        balloon.isFlying = false;
    }
    res.send(balloon);
});

module.exports = router;