var direct = document.querySelector("#directions");

function initMap() {
  var directionsRenderer = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: 35.2271, lng: -80.8431 }
  });
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  infoWindow = new google.maps.InfoWindow;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  directionsRenderer.setMap(map);
  directionsRenderer.setPanel(document.getElementById('right-panel'));

  var control = document.getElementById('floating-panel');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  var onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };
  document.getElementById('start').addEventListener('keypress', function (e) {
    var Key = e.which || e.keyCode;
    if (Key === 13) {
      onChangeHandler();
    }
  });
  document.getElementById('end').addEventListener('keypress', function (e) {
    var Key = e.which || e.keyCode;
    if (Key === 13) {
      onChangeHandler();
    }
  });
  
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var positionA = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  

    console.log(positionA);
    // var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
      origin: positionA,
      destination: end,
      travelMode: 'DRIVING',
      // travelMode: 'TRANSIT'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        // window.alert('Directions request failed due to ' + status);
      }
    });

  });

}

// $(document).on("click","#directions", function(event){
//   location.href = "./index.html";

// });

// $(document).on("click",".buttonID", function(event){

//         location.href = "../envent_P.html";
// });

