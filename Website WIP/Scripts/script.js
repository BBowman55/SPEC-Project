// Home Button
document.addEventListener("DOMContentLoaded", function() {
    // Check if indexBtn exists on the page before adding event listener
    const indexBtn = document.getElementById("indexBtn");
    if (indexBtn) {
        indexBtn.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }

    // Event listener for clientBtn on client_login.html
    const clientBtn = document.getElementById("clientBtn");
    if (clientBtn) {
        clientBtn.addEventListener("click", function() {
            window.location.href = "client_login.html";
        });
    }

    // Event listener for staffBtn on staff_login.html
    const staffBtn = document.getElementById("staffBtn");
    if (staffBtn) {
        staffBtn.addEventListener("click", function() {
            window.location.href = "staff_login.html";
        });
    }

    const signupBtn = document.getElementById("signupBtn");
    if (signupBtn) {
        signupBtn.addEventListener("click", function() {
            window.location.href = "signup.html";
        });
    }

});

// Login Form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    var formData = new FormData(this);
    
    // Login test
    var username = formData.get("username");
    var password = formData.get("psw");
    
    if (username === "admin" && password === "admin") {
        displayMessage("Login successful!");
    } else {
        displayMessage("Invalid username or password.");
    }
});


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    var formData = new FormData(this);

});

function displayMessage(message) {
    document.getElementById("message").textContent = message;
}

// Event Functions:
let events = [];
let editIndex = -1; // Variable to store the index of the event being edited

function displayEvents() {
    const eventsList = document.getElementById("eventsList");
    eventsList.innerHTML = ""; // Clear list

    events.forEach((event, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            <strong>Title:</strong> ${event.title}<br>
            <strong>Date:</strong> ${event.date}<br>
            <strong>Time:</strong> ${event.time}<br>
            <strong>Location:</strong> ${event.location}<br>
            <strong>Description:</strong> ${event.description}<br>
            <button class="btn btn-danger mr-2" onclick="deleteEvent(${index})">Delete</button>
            <button class="btn btn-warning" onclick="openEditModal(${index})">Edit</button>
        `;
        eventsList.appendChild(li);
    });
}

function addEvent(title, date, time, location, description) {
    const newEvent = {
        title: title,
        date: date,
        time: time,
        location: location,
        description: description
    };
    events.push(newEvent);
    displayEvents();
}

function openEditModal(index) {
    editIndex = index; // Set the index of the event being edited
    const event = events[index];

    // Fill the modal form fields with the existing event details
    document.getElementById("editTitle").value = event.title;
    document.getElementById("editDate").value = event.date;
    document.getElementById("editTime").value = event.time;
    document.getElementById("editLocation").value = event.location;
    document.getElementById("editDescription").value = event.description;

    // Show modal
    $('#editEventModal').modal('show');
}

function saveEditedEvent() {
    const title = document.getElementById("editTitle").value;
    const date = document.getElementById("editDate").value;
    const time = document.getElementById("editTime").value;
    const location = document.getElementById("editLocation").value;
    const description = document.getElementById("editDescription").value;

    if (title && date && time && location && description) {
        // Update the event details in the events array
        events[editIndex] = {
            title: title,
            date: date,
            time: time,
            location: location,
            description: description
        };
        $('#editEventModal').modal('hide'); // Hide the modal
        displayEvents(); // Update the displayed events
    }
}

function deleteEvent(index) {
    events.splice(index, 1);
    displayEvents();
}

const eventForm = document.getElementById("eventForm");
eventForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    addEvent(title, date, time, location, description);
    eventForm.reset(); // Clear form fields after submission
});

// Initial display of events
displayEvents();
