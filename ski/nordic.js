
function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: { lat: 53.86774473151245, lng: 10.68957380066593 },
      mapTypeId: "satellite",
    });

    //directions function for displaying route
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
    //InfoWindows 
    // https://developers.google.com/maps/documentation/javascript/infowindows
    // When the user clicks the marker, an info window opens.
    //Customized InfoWindows for each marker to display location name, website, etc. for better usability.
    //Adapted from: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple#maps_infowindow_simple-javascript
    const HBHcontentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Lübeck Hauptbahnhof, train station</h1>' +
      '<div id="bodyContent">' +
      //"<p><a href="https:www.bahnhof.de/bahnhof-de/bahnhof/L-C3-BCbeck-Hbf-1038668">Lübeck Hbf</a></p>" +
      "</div>" +
      "</div>";
    const HBHinfowindow = new google.maps.InfoWindow({
      content: HBHcontentString,
    });
    const HTORcontentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Holstentor</h1>' +
      '<div id="bodyContent">' +
      "<p></p>" +
      "</div>" +
      "</div>";
    const HTORinfowindow = new google.maps.InfoWindow({
      content: HTORcontentString,
    });
    const HMMcontentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading"> Hansemuseum</h1>' +
      '<div id="bodyContent">' +
      "<p></p>" +
      "</div>" +
      "</div>";
    const HMMinfowindow = new google.maps.InfoWindow({
      content: HMMcontentString,
    });
    const KHcontentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Kartoffelhaus Restaurant</h1>' +
      '<div id="bodyContent">' +
      "<p></p>" +
      "</div>" +
      "</div>";
    const KHinfowindow = new google.maps.InfoWindow({
      content: KHcontentString,
    });

    //marker part 2
    const HBHmarker = new google.maps.Marker({
      position: { lat: 53.86729370705401, lng: 10.6704796398457 },
      map,
      title: "Luebeck Hauptbahnhof",
    });
    const HTORmarker = new google.maps.Marker({
      position: {lat: 53.8663742123479, lng: 10.679616632958648},
      map,
      title: "Holstentor",
    });
    const HMMmarker = new google.maps.Marker({
      position: { lat: 53.87408349161617, lng: 10.68965203307794},
      map,
      title: "Hansemuseum",
    });
    const KHmarker = new google.maps.Marker({
      position: {lat: 53.87113800806131, lng: 10.690554568750594 },
      map,
      title: "Kartoffelhaus Restaurant",
    });

    //marker part 3
    HBHmarker.addListener("click", () => {
      HBHinfowindow.open({
        anchor: HBHmarker,
        map,
        shouldFocus: false,
      });
    });
    HTORmarker.addListener("click", () => {
      HTORinfowindow.open({
        anchor: HTORmarker,
        map,
        shouldFocus: false,
      });
    });
    HMMmarker.addListener("click", () => {
      WBinfowindow.open({
        anchor: HMMmarker,
        map,
        shouldFocus: false,
      });
    });
    KHmarker.addListener("click", () => {
      KHinfowindow.open({
        anchor: KHmarker,
        map,
        shouldFocus: false,
      });
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
            //{location: {lat: 53.88372911045473, lng: 10.720531989914921}}, //lauerholz
            //{location: {lat: 53.869183939419585, lng: 10.743078535583543}} //wang-su
                      ],
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode],
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((_e) => window.alert("Directions request failed due to " + status));
  }


  

