// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Select tbody
var tbody = d3.select("tbody");

// Create event handlers
button.on("click", runFilter);
form.on("submit", runFilter);

// Creating the event handler function
function runFilter()
{

    //Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime == inputValue);

    tbody.html("");
    
    filteredData.forEach((UFOreport) => {
        var row = tbody.append("tr");
        Object.entries(UFOreport).forEach(([key, value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

};
