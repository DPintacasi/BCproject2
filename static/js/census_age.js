const census_visual = d3.json("/data/census").then(function(data){
    console.log("Retriving census age");

    var dataset = data[0];
    console.log(dataset);

    console.log(dataset.geographies);

    console.log(dataset.data["United States"]);

    var selRegion = dataset.data["United States"];

    console.log(selRegion["<35"]);

    var plotData = []

    for (const [key, value] of Object.entries(selRegion) ){
        var trace = {
            x : dataset.labels,
            y : value,
            name: key,
            type : "bar"
        }
        plotData.push(trace)
      };

    layout = {
        title : "census test",
        barmode: "stack",
        colorway : ['#f3cec9', '#e7a4b6', '#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844']
    }

    Plotly.newPlot("census_age", plotData, layout);

});