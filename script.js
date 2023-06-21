// Initialize map
function initMap() {
    console.log("initMap called");
    // Specify the map container element
    var mapContainer = document.getElementById('map');
  
    // Create a map using Leaflet library
    var map = L.map(mapContainer).setView([ 39.04696459696062, -94.61748984637259], 13);
  
    // Add a tile layer using OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // adding toilet icon for map marker
    var toiletIcon = L.divIcon({
        className: 'map-icon',
        html: '<i class = "fas fa-toilet"></i>',
        iconSize: [33, 33],
    });


    function onMapClick(e) {
        console.log('Clicked coordinates:', e.latlng.lat, e.latlng.lng);
        const latitude = e.latlng.lat;
        const longitude = e.latlng.lng;

        const marker = L.marker([latitude, longitude], { icon: toiletIcon }).addTo(map);

        //temporary popup content
        // var popupContent = "Annie's bathroom: Amazing cat rug, but make sure you hide the toilet paper!";
        // marker.bindPopup(popupContent).openPopup();
    }

    map.on('click', onMapClick);
  }
  
  // Call the initMap function when the DOM is ready
  document.addEventListener('DOMContentLoaded', initMap);
  