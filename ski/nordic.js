function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 53.86774473151245, lng: 10.68957380066593 },
      mapTypeId: "satellite",
    });
    //map tilt from: https://developers.google.com/maps/documentation/javascript/examples/aerial-simple#maps_aerial_simple-javascript
    map.setTilt(45);
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
  }
  
  
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = document.getElementById("mode").value;
  
    directionsService
    .route({
        origin: { lat: 53.86729370705401, lng: 10.6704796398457 }, //hauptbahnhof
        destination: {lat: 53.86837127405975, lng: 10.680588150723842}, //hotel anno 1216
        //All the waypoints for the walking tour
        //Start at Hauptbahnhof - train station, see stuff, eat a lot, walk everywhere, end at Hotel Anno 1216
        waypoints: [
            {location: {lat: 53.8663742123479, lng: 10.679616632958648}}, //holstentor
            {location: {lat: 53.87408349161617, lng: 10.68965203307794}}, //hansemuseum
            {location: {lat: 53.873894711552886, lng: 10.691327126529243}}, //burgtor
            {location: { lat: 53.87113800806131, lng: 10.690554568750594}}, //luebecker kartoffelkeller
            {location: { lat: 53.868524126948884, lng: 10.685739812661957}}, //thomas mann haus
            {location: { lat: 53.866608685571464, lng: 10.685810001292772}}, //marzipan
            {location: { lat: 53.86744817515813, lng: 10.761481448704354}}, //wesloer wald see 
            {location: { lat: 53.86595211672861, lng: 10.691594364528683}}, //restaurant schlumachers
                      ],
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode],
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }

