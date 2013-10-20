var map;

function initialize(area) {
    //create geocoder object
    geocoder = new google.maps.Geocoder();
    
    //set map options
    var mapOptions = {
        center: new google.maps.LatLng(-9.033, 13.56),
        //disable default controllers
        disableDefaultUI: true,
        //map type options
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        //zoom options
        zoom: 9,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        minZoom: 3,
        maxZoom: 20,
    };
    
    //apply options
    if (area === undefined)
        throw new Error('Needed first parameter, "area", on initializing map');;
    //create map
    map = new google.maps.Map(document.getElementById(area),
        mapOptions);

}

//create a marker
function createMarker(lat, long, name) {
    var latLng = new google.maps.LatLng(lat, long);

    var markerr = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'MAQMAN'
    });
    //create info window
    var infowindow = new google.maps.InfoWindow(
      {
          content: '<div id="content">'+ name+ '</div>',
          size: new google.maps.Size(50, 50)
      });
    //add info window to marker
    google.maps.event.addListener(markerr, 'click', function () {
        //map.setZoom(8);
        //map.setCenter(marker.getPosition());
        
        //opens a text window
        infowindow.open(map, this);
    });
    return markerr;
}
$(document).ready(function(){
    

    initialize('miniMap');
    createMarker(-9.033, 13.56,'Estrada de Catete, Km 44, Bengo – Angola')
});