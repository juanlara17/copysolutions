function initMap() {
    // The location of Uluru
    var uluru = {lat: 11.016825, lng: -74.809476};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }