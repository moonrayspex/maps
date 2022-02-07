
// source: https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
// Use function to create map 
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: { lat: 43.874721303468206, lng: -79.73041974777321}, 
      mapTypeId: "terrain"
    });
// Fill in lat/long and location names, URL of ski locations

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

