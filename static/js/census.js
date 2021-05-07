d3.json("/data/census").then(function(data){
    console.log("Retriving census age");
    console.log(data)

    const ageDataset = data[0];
    const raceDataset = data[1];

    // *****************
    // tree map building functions
    // *****************
    function buildAgeTree(){

        var dataSelection = ageDataset.data["United States"];

        var labels = [ 
            "<35 year old owners", 
            "35-44 year old owners", 
            "45-54 year old owners", 
            "55-64 year old owners", 
            "65-74 year old owners", 
            "75-84 year old owners", 
            ">85 year old owners", 
            "<35 year old renters", 
            "35-44 year old renters", 
            "45-54 year old renters", 
            "55-64 year old renters", 
            "65-74 year old renters", 
            "75-84 year old renters", 
            ">85 year old renters",
            "owner-occupied", 
            "renter-occupied"
        ];
        var parents = [
            "owner-occupied", 
            "owner-occupied", 
            "owner-occupied", 
            "owner-occupied", 
            "owner-occupied", 
            "owner-occupied", 
            "owner-occupied",  
            "renter-occupied",
            "renter-occupied",
            "renter-occupied",
            "renter-occupied",
            "renter-occupied",
            "renter-occupied",
            "renter-occupied",
            "",
            ""
        ];
        var data = [{
            type: "treemap",
            branchvalues: "total",
            labels: labels,
            parents: parents,
            values:  dataSelection,
            textinfo: "label+value+percent parent+percent entry",
            // domain: {"x": [0, 0.48]},
            outsidetextfont: {"size": 20, "color": "#377eb8"},
            marker: {"line": {"width": 2}},
            pathbar: {"visible": false}
            }];
        
        var layout = {
        };

        Plotly.newPlot('census_age', data, layout);
    };
            
    function buildRaceTree(){

        var dataSelection = raceDataset.data["United States"]
        var labels = raceDataset.labels
        var ow = labels[16]
        var re = labels[17]
        var parents = [ow,ow,ow,ow,ow,ow,ow,ow,re,re,re,re,re,re,re,re,"",""]

        var data = [{
            type: "treemap",
            branchvalues: "total",
            labels: labels,
            parents: parents,
            values:  dataSelection,
            textinfo: "label+value+percent parent+percent entry",
            // domain: {"x": [0, 0.48]},
            outsidetextfont: {"size": 20, "color": "#377eb8"},
            marker: {"line": {"width": 2}},
            pathbar: {"visible": false}
            }];
        
        var layout = {
        };

        Plotly.newPlot('census_race', data, layout);






    }

    buildAgeTree()
    buildRaceTree()
            
            



    

});