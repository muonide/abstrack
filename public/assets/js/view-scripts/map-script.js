// put in global scope for Google Maps api
function initMap() { }

(function(){
    $(window).on('load', function() {

        //overwriting the initMap function to load map
        // var map;
        // initMap = function() {
        //     map = new google.maps.Map(document.getElementById('map'), {
        //         center: {lat: 35.842335, lng: -90.6788892},
        //         zoom: 8
        //     });
        // }

        // initMap();

        // show  the predicted flight path of the balloon
        // var flightCoords = [
        //     {lat: 35.842335, lng: -90.6788892},
        //     {lat: 38.365354, lng: -96.1356845},
        //     {lat: 42.123569, lng: -100.1365694},
        //     {lat: 48.456868, lng: -108.4689534},
        //     {lat: 52.123548, lng: -115.1356864},
        // ]

        // var predictedPath = new google.maps.Polyline({
        //     path: flightCoords,
        //     geodesic: true,
        //     strokeColor: '#FF0000',
        //     strokeOpacity: 1.0,
        //     strokeWeight: 2
        // })

        // predictedPath.setMap(map);

        //update the map with the coordinates sent back from the balloon

    });

})();