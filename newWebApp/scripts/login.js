document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting
        const formData = new FormData(loginForm);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/login.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        // Redirect to dashboard or another page upon successful login
                        const user_id = response.user_id;
                        localStorage.setItem('user_id', user_id);
                        console.log('User ID:', response.user_id);
                        location.href = 'account.html';
                    } else {
                        // Handle login failure (display error message, etc.)
                        console.error('Login failed:', response.message);
                        alert('Login failed. Please check your credentials and try again.');
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            } else {
                console.error('Error:', xhr.statusText);
            }
        };
        xhr.send(new URLSearchParams(formData));
    });
});
