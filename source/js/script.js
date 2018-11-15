var navMain = document.querySelector('.mainNav');
var navToggle = document.querySelector('.mainNav__toggle');

navMain.classList.remove('mainNav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('mainNav--closed')) {
    navMain.classList.remove('mainNav--closed');
    navMain.classList.add('mainNav--opened');
  } else {
    navMain.classList.add('mainNav--closed');
    navMain.classList.remove('mainNav--opened');
  }
});

function init_map(){
  var myOptions = {
    zoom:17,
    center:new google.maps.LatLng(59.938898, 30.323026),
    zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
    mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("gmap"), myOptions);
  marker = new google.maps.Marker({
  map: map,position: new google.maps.LatLng(59.938898, 30.323026),
  icon: {url: "img/map-pin.png", scaledSize: new google.maps.Size(124, 106)}});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
}
  google.maps.event.addDomListener(window, 'load', init_map);
