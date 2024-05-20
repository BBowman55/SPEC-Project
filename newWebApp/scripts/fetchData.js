// Ajax request to fetch data from the server
const eventContainer = document.getElementById("eventsContainer");

// Retrieve user_id from localStorage
const storedUserId = localStorage.getItem('user_id');

// Check if storedUserId is not null
if (storedUserId) {
    const user_id = { user_id: storedUserId };
    const user_id_json = JSON.stringify(user_id);
    console.log(user_id);

    const xhr1 = new XMLHttpRequest();
    xhr1.open('POST', 'php/fetch_data.php', true);
    xhr1.setRequestHeader('Content-Type', 'application/json');
    xhr1.onload = function () {
        if (xhr1.status === 200) {
            // Response handling
            console.log(xhr1.responseText);
            // You can handle the response here
        } else {
            console.error('Error:', xhr1.statusText);
            // Handle the error
        }
    };
    xhr1.send(user_id_json);
} else {
    console.error('Error: user_id is null in localStorage');
    // Handle the case when user_id is null
}





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