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
    };