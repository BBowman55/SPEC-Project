// Ajax request to fetch data from the server
const eventContainer = document.getElementById("eventsContainer");

function fetchData() {
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'php/fetch_data.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Parse the JSON data  and display it in the eventsContainer div
            var data = JSON.parse(xhr.responseText);

            console.log(data);

            // Updates the eventsContainer div
            var eventsContainer = document.getElementById('eventsContainer');
            eventsContainer.innerHTML = '';

            var table = document.createElement('table');

            var headerRow = document.createElement('tr');
            headerRow.innerHTML = "<th>Name</th><th>Description</th><th>Date</th><th>Time</th>"; 
            table.appendChild(headerRow);
            
            
            data.forEach(function(rowData) {
                var row = document.createElement('tr');
                
                var nameCell = document.createElement('td');
                nameCell.classList.add("nameCell");
                nameCell.textContent = rowData.name;
                row.appendChild(nameCell);
                
                var descriptionCell = document.createElement('td');
                descriptionCell.classList.add("descriptionCell");
                descriptionCell.textContent = rowData.description;
                row.appendChild(descriptionCell);
                
                var dateCell = document.createElement('td');
                dateCell.classList.add("dateCell");
                dateCell.textContent = rowData.date;
                row.appendChild(dateCell);
                
                var timeCell = document.createElement('td');
                timeCell.classList.add("timeCell");
                timeCell.textContent = rowData.time;
                row.appendChild(timeCell);
                                    
                table.appendChild(row);
                
            });
            eventsContainer.appendChild(table);
        }
      
    };
    xhr.send();
}



document.addEventListener('DOMContentLoaded', fetchData);