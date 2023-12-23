// Geolocation watchPosition & clearWatch

// watchPosition
let watchId;
if (navigator.geolocation) {
  watchId = navigator.geolocation.watchPosition(displayLocation);
} else {
  alert("No geolocation support");
}

function displayLocation(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const div = document.getElementById("location");
  div.innerHTML =
    "You are at latitude: " +
    latitude +
    " and You are at longitude: " +
    longitude;
}

// clearWatch
function stopWatching() {
  if (navigator.geolocation) {
    navigator.geolocation.clearWatch(watchId);
    alert("Geolocation watch cleared and stopped");
  }
}
