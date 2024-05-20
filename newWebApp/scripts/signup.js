document.addEventListener('DOMContentLoaded', function() {
// Get the signup form element
const signupForm = document.getElementById('signup-form');

// Add event listener for form submission
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const formData = new FormData(signupForm);

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open('POST', 'php/signup.php', true);

    // Set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Handle the response
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Handle successful response
            console.log(xhr.responseText);

            window.location.href = "account.html";
        } else {
            // Handle error response
            console.error('Error:', xhr.statusText);
        }
    };

    // Send the request
    xhr.send(new URLSearchParams(formData));
    });
});
