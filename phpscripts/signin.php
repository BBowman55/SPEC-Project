<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection parameters
    include 'db_connect.php';
    // Fetch form data
    $email = $_POST['signinEmail'];
    $password = $_POST['signinPassword'];
    // SQL to check if user exists
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // User exists, sign-in successful
        echo "Signed in successfully!";
        // Start the session and set user_id
        session_start();
        $user = $result->fetch_assoc();
        if (isset($user['user_id'])) {
            $_SESSION['user_id'] = $user['user_id'];
        } else {
            echo "User ID not found!";
        }
    } else {
        // User does not exist or invalid credentials
        echo "Invalid email or password!";
    }
    $conn->close();
}
?>