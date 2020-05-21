// read in data from app.py
var data_samples = "/samples";

// draw bar plot

// d3.json(data_samples, function(data) {
//     console.log(data);
// });

// d3.json("../samples.json").then(function(data) {
//     console.log(data[0]);
//   });


// const fs = require('fs');
// const json_data = require('../samples.JSON');

// fs.readFile(json_data, 'utf8', function (err, data) {
//   try {
//     data = JSON.parse(data)
//     for (let i in data){
//     console.log('Name:',data[i].name)
//     }
//   } catch (e) {
//     // Catch error in case file doesn't exist or isn't valid JSON
//   }
// });



// d3.json("../../samples.json", function(data){
//     var bar = [{
//         type: 'bar',
//         x: samples.map(row => row.pair),
//         y: [ 10,20,30,40,50 ],
//         yaxis: 'otu_ids',
//         orientation: 'h'
//       }];
    
//       // labels : otu_ids 
//       // hover : otu_labels 
    
//       Plotly.newPlot('myDiv', data);
// })

// function buildbar(sample) {
//     d3.json("samples.json").then((data) => {
//     // var otu_ids 
//     // var otu_labels

// })
// };

//     var sampleURL = `"/samples/<sample>"}`
//     console.log(sampleURL)
//         var bar = [{
//         type: 'bar',
//         x: sampleURL.map(row => row.pair),
//         y: [ 10,20,30,40,50 ],
//         yaxis: 'otu_ids',
//         orientation: 'h'
//       }];
    
//       // labels : otu_ids 
//       // hover : otu_labels 
    
//       Plotly.newPlot('myDiv', data);
// };

function buildBar(sample) {
    d3.json(`/samples/${sample}`).then((data) => {

      var otu_ids  = data.otu_ids;
      var otu_labels = data.otu_labels;
      var sample_values = data.sample_values;

      var bar = {
        x: sample_values,
        y: sample,
        labels: otu_ids, 
        values: sample_values.slice(0, 10),
        hovertext: otu_labels.slice(0, 10),
        type: "bar"
      };
      let pie_layout = {
        height: 500,
        width: 600
      };
      console.log(data);

      Plotly.newPlot("pie", pie_chart, pie_layout);
  
    });
  };

      var bubbleChart = {
        mode: "markers",
        x: otu_ids,
        y: sample_values,
        text: otu_labels, 
        marker: {color:otu_ids, colorscale:"Rainbow", size:sample_values}
      };

      var bubble_data = [bubbleChart];

      var bubble_layout = {
  
        title : "Bacteria Type and Counts",
        showlegend: false,
        height: 600,
        width: 1000
  
      };
  
      Plotly.newPlot("bubble", bubble_data, bubble_layout);
  
//   function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset");
  
//     // Use the list of sample names to populate the select options
//     d3.json("/names").then((sampleNames) => {
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
  
//       // Use the first sample from the list to build the initial plots
//       const firstSample = sampleNames[0];
//       buildCharts(firstSample);
//       buildMetadata(firstSample);
//     });
//   }
  
//   function optionChanged(newSample) {
//     // Fetch new data each time a new sample is selected
//     buildCharts(newSample);
//     buildMetadata(newSample);
//   }
  
  // Initialize the dashboard
//   init();