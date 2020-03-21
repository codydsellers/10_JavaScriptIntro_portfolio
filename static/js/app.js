var sightings = data;

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData)

    filteredData.forEach((UFOsighting) => {
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});