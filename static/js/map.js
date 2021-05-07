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


// Grab data with d3
d3.json("/data/map").then(function(data) {
  console.log(data);
  geojson = L.choropleth(data {

    // Define what property in features to use
    valueProperty: "median_house_price", 

<<<<<<< HEAD
    // Set colors
    colors: ['#f3e79b', '#e0d09e', '#ccbaa1', '#b8a4a3', '#a38fa4', '#8e7aa5', '#7666a5', '#5c53a5']

    // # of breaks in step range
    steps: 8,


  }).addTo(myMap);
  
=======
// Grab data with d3
d3.json("/data/map").then(function(data) {
  console.log(date)
  // geojson = L.choropleth(data).addTo(myMap);
  // console.log(geojson.options.limits);
>>>>>>> main
}); // ends GET request



  // Bind a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3>" + state + "</h3><hr><p>" + feature.property.inventory "</p><br><p>" + 
      "$" + feature.property.median_sale_price + "</p><br><p>"
      "$" + feature.property.median_sale_ppsf + "</p>");
    } // Ends pop-up binding of data 
//   }); // ends choropleth layer

// }); // ends D3 data grab

// // getColor function depending on mean house price value
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


