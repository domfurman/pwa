window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  makeMap()
}
  function sosVibration() {
    setTimeout(function() {
        window.navigator.vibrate(200);
    }, 0);

    setTimeout(function() {
        window.navigator.vibrate(1000);
    }, 500);

    setTimeout(function() {
        window.navigator.vibrate(200);
    }, 1500);
  }
  

function makeMap(){
  var map = L.map('map').fitWorld();

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);
  map.locate({setView: true, maxZoom: 16});
  function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

  map.on('locationfound', onLocationFound);
  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationerror', onLocationError);
}


