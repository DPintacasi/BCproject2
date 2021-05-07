d3.json("/data/redfin").then(function(data){
  console.log("redfin data is here")
  console.log(data)
  var redfindata = data
  console.log(redfindata)

  // function buildMetadata(sample) {
  //   d3.json("samples.json").then((data) => {
  //     var metadata = data.metadata;
  //     // Filter the data for the object with the desired sample number
  //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
  //     var result = resultArray[0];
  //     // Use d3 to select the panel with id of `#sample-metadata`
  //     var PANEL = d3.select("#sample-metadata");
  
  //     // Use `.html("") to clear any existing metadata
  //     PANEL.html("");
  
  //     // Use `Object.entries` to add each key and value pair to the panel
  //     // Hint: Inside the loop, you will need to use d3 to append new
  //     // tags for each key-value in the metadata.
  //     Object.entries(result).forEach(([key, value]) => {
  //       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
  //     });
  

var total_homes_info = unpack(redfindata.data, 2);
var median_price_info = unpack(redfindata.data, 3);

// Trace1 for the homeownership data
var trace1 = {
    x: total_homes_info,
    y: redfindata.map(row => row.year),
    name: "Total Homes Sold",
    type: "bar"
  };
  
  // Trace 2 for the median Data
  var trace2 = {
    x: median_price_info,
    y: redfindata.map(row => row.data.year),
    // text: redfindata.map(row => row.romanName),
    name: "Median House Price",
    type: "scatter"
  };
  
  // Combining both traces
  var traceData = [trace1, trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Total Homes Sold versus Median Price",
    pattern: "independent"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", traceData, layout);
})