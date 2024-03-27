// Home Buttons
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


