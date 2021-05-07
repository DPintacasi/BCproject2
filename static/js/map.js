// Create map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
}); // ends map object

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
}).addTo(myMap); // ends lightmap

// create variable to fetch state boundary data
// var states = "static/data/leaflet_states.geojson";

// create variable to fetch county boundary data
var counties = "static/data/us_counties.geojson"; 

var geojson;

// Grab data with d3
d3.json(counties).then(function(data) {
  geojson = L.choropleth(data).addTo(myMap);
  console.log(geojson.options.limits);
}); // ends GET request



//     // Bind a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h3>" + state + "</h3><hr><p>" + inventory "</p><br><p>" + median_sale_price + "</p>");
//     } 
//   }); // ends choropleth layer

// }); // ends D3 data grab

// // getColor function depending on inventory value
// function getColor(i) {
//   return i > # ? '#5c53a5' :
//          i > # ? '#7666a5' :
//          i > # ? '#8e7aa5' :
//          i > # ? '#a38fa4' :
//          i > # ? '#b8a4a3' :
//          i > # ? '#ccbaa1' :
//          i > # ? '#e0d09e' :
//                 '#f3e79b';
// } // ends getColor function

function style(feature) {
  return {
    weight: 1,
    opacity: 1,
    color: 'black',
    fillOpacity: 0.8,
    fillColor: getColor(feature.properties.inventory)
  }
}


