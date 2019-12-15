// from data.js
var ufoData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// UFO report values (date, city, state, country, shape, duration, comments)
ufoData.forEach((sightings) => {
  var row = tbody.append("tr");
  Object.entries(sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
console.log(sightings);
  });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateSearched = d3.select("#datetime");

  // Get the value property of the date searched
  var searchedValue = dateSearched.property("value");
  console.log(dateSearched);

  // Filter results based on input
  var filteredData = ufoData.filter(ufoSighting => ufoSighting.datetime === searchedValue);
  console.log(filteredData);

  // Create placeholder for results to append to
  tbody.html("");

// // Use d3 to update each cell's text with
// // selected UFO report values (Date, City, State, Country, Shape, Duration, Comments)
filteredData.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
});