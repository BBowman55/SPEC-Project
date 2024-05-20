document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(eventForm);

        // Create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'create_event.php', true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Response handling
                console.log(xhr.responseText);
                // You can handle the response here
            } else {
                console.error('Error:', xhr.statusText);
                // Handle the error
            }
        };

        // Send form data
        xhr.send(formData);
    });
});
