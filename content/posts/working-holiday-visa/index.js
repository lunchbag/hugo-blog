/**
 * MAPBOX
 * secret.js contains assignment of mapboxgl.accessToken
 */

// Initializing Mapbox
var map = new mapboxgl.Map({
  container: "whv-map",
  style: "mapbox://styles/mapbox/light-v9",
  center: [47, 20],
  minZoom: 1.4,
  maxZoom: 1.4,
  dragPan: false,
  zoom: 1.4
});

// On Mapbox click, jump to country (if on a marker)
map.on("click", function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ["locations"] });
  if (features.length) {
    var clickedPoint = features[0];
    jump(clickedPoint.properties.country);
  }
});

// On Mapbox load, add the sources and icon layer
map.on("load", function(e) {
  // Add the stores data as a source
  map.addSource("places", {
    type: "geojson",
    data: countries
  });

  // Add a layer to the map with styling rules to render the source
  map.addLayer({
    id: "locations",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "circle-11",
      "icon-allow-overlap": true
    }
  });
});

// Create a popup, but don't add it to the map yet
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

// On Mapbox mouse hover over a marker, show the country name
map.on("mousemove", function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ["locations"] });

  // Change cursor to show it's clickable
  map.getCanvas().style.cursor = features.length ? "pointer" : "";

  // Do nothing if there's nothing there.
  if (!features.length) {
    popup.remove();
    return;
  }

  // Show popup
  var feature = features[0];
  popup
    .setLngLat(feature.geometry.coordinates)
    .setHTML("<b>" + feature.properties.country + "</b>")
    .addTo(map);
});

/**
 * OTHERS
 */

// Jump to a link anchor on the same page
function jump(anchor) {
  location.href = "#" + anchor;
  // Also remove popup from the map
  popup.remove();
  // Show 'back to map' button
  document.getElementById("back-to-map").style.display = "block";
}

// Back to Map button event handler
document.getElementById("back-to-map").addEventListener("click", function(e) {
  // Jump to map
  location.href = "#map";
  // Remove on click
  document.getElementById("back-to-map").style.display = "none";
});
