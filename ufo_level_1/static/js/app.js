// from data.js

var button = d3.select('#filter-btn');


button.on('click',function(){

    var tableData = data;
    var inputElement=d3.select('.form-control');
    var inputValue=inputElement.property('value');
    console.log(inputValue)
    console.log(tableData)
    
    var earasedData = tableData.html('')

    var filterData = tableData.filter(data=>data.datetime===inputValue);
    console.log(filterData)
    
    
    filterData.forEach(function(data) {
        console.log(data);
        var tbody=d3.select('#body-slam')
        var row = tbody.append("tr");
   
        Object.entries(data).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          
          var cell =row.append("td");
          
          cell.text(value);
          
        });

  
})
})