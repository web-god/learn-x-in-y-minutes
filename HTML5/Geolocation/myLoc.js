// Geolocation getCurrentPosition
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayLocation);
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
