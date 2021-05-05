d3.json("/data/fred").then(function(data){
    console.log("Retriving fred data")
    console.log(data)
    var dataset = data[0]
    console.log(dataset)

    var plotData = []

    for (const [key, value] of Object.entries(dataset) ){
        var trace = {
            x : dataset.date,
            y : value,
            name: key,
            type : "line"
        }
        plotData.push(trace)
      };

    var layout = {
        title: "fred test"
    }

    Plotly.newPlot("fred_prices_trend", plotData, layout);
})