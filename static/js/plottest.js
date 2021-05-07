d3.json("/data/redfin").then(function(data){
  console.log("redfin data is here")
  console.log(data)
  var redfindata = data
  console.log(redfindata)


  var total_homes_sold = redfindata.total_homes_sold;
  var year = redfindata.year;
  var startDate = data.dataset.start_date;
  var endDate = data.dataset.end_date;
  var dates = unpack(data.dataset.data, 0);
  var closingPrices = unpack(data.dataset.data, 4);

// Trace1 for the homeownership data
var trace1 = {
    x: redfindata.map(row => row.total_homes_sold),
    y: redfindata.map(row => row.year),
    // text: data.map(row => row.date),
    name: "Homweownership Rate",
    type: "bar"
  };
  
  // Trace 2 for the median Data
  var trace2 = {
    x: redfindata.map(row => row.median_house_price),
    y: redfindata.map(row => row.year),
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