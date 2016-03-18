var initMap = require('./../js/initMap-interface.js').initMap;

$(document).ready(function() {
  alert("hey, I reloaded!")
$("#showMap").append(locateUser);
});

function geolocationError(positionError) {
  alert(positionError);
}


function locateUser(){
  if (navigator.geolocation){
    var positionOptions = {
      enablehighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(initMap, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}
