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
        
        // var predictedPath = new google.maps.Polyline({
        //     path: [],
        //     geodesic: true,
        //     strokeColor: '#FF0000',
        //     strokeOpacity: 1.0,
        //     strokeWeight: 2
        // })

        // predictedPath.setMap(map);

        // var getCoordsTimer = setInterval(function(){
        //     var _this = this;
        //     $.get('/prediction/liveupdate', function(data, status)
        //     {
        //         console.log("data:", data);
        //         if(data != undefined || data != null)
        //         {
        //             var path = predictedPath.getPath();
        //             path.push(new google.maps.LatLng(data.coords.lat, data.coords.lng));
        //             predictedPath.setPath(path);
        //         }else
        //         {
        //             clearInterval(_this);
        //         }
        //     });
        // }, 2000);

    });

})();