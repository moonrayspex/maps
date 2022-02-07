
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


  ******************************************
// source: https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
// Use function to create map 
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9.25,
      center: { lat: 49.673017, lng: -57.736697}, 
// Change style of base map to highlight park boundary and stylize map
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#B8860B" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#556B2F" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#5F9EA0" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    }); 
// Fill in lat/long and location names of each trail head

  const tourStops = [
    [{ lat: 49.5661, lng: -57.832231}, "Gros Morne Mountain Hiking Trail"],
    [{ lat: 49.492747, lng: -57.927566},"Lookout Hills Trail"],
    [{ lat: 49.478171, lng: -57.973777},"Tablelands Trail"],
    [{ lat: 49.490441, lng: -58.077168},"Green Gardens Trail"],
    [{ lat: 49.483501, lng: -58.121668},"Eastern Point Trail"],
    [{ lat: 49.478115, lng: -58.131408},"Lighthouse - Old Man Trail"],
    [{ lat: 49.51797, lng: -57.874722},"Burnt Hill Trail"],
    [{ lat: 49.635278, lng: -57.956811},"Berry Head Pond Trail "],
    [{ lat: 49.624326, lng: -57.930105},"Bakers Brook Falls Trail"],
    [{ lat: 49.623947, lng: -57.930161},"Berry Hill Trail "],
    [{ lat: 49.656548, lng: -57.955756},"Coastal Trail"],
    [{ lat: 49.78736, lng: -57.874409},"Western Brook Pond Trail"],
    [{ lat: 49.781881, lng: -57.842815},"Snug Harbour Trail "],
    [{ lat: 49.835582, lng: -57.86306},"Steve's Trail "],
    [{ lat: 49.919906, lng: -57.81352},"Cow Head Community Trail"],
    [{ lat: 49.368158, lng: -57.966368},"Overfalls Trail"],
    [{ lat: 49.461155, lng: -58.117346},"Trout River Pond Trail"],
    [{ lat: 49.438605, lng: -58.131419},"Elephant Head Trail"],
    [{ lat: 49.478135, lng: -57.974012},"Tablelands Off-Trail Loop"],
    [{ lat: 49.42682, lng: -57.739073},"Lomond River Trail"],
    [{ lat: 49.426602, lng: -57.73874},"Stuckless Pond Loop"],
    [{ lat: 49.46321, lng: -57.659363},"South East brook Pond Trail"],
    [{ lat: 49.600442, lng: -57.936282},"Rocky Hills Lookout"],
    [{ lat: 49.60764, lng: -57.939934},"Baker's Brook Winter Access"],
    [{ lat: 49.602946, lng: -57.955303},"Lobster Cove Head Trails"],
];

// Create pop-up window on marker click for trail name
// https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
const infoWindow = new google.maps.InfoWindow();

// Create Markers with trail name in tourStops
tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
      label: ``,
      optimized: false,
    });
// Add a click listener for each marker, view pans to selected marker
// https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
    marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }

