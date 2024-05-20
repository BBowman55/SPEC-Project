<?php
session_start();

include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (isset($email) && isset($password)) {
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if ($user) {
            if (password_verify($password, $user['password'])) {
                // Store the user_id in the session
                $_SESSION['user_id'] = $user['user_id'];

                // Set a cookie to indicate that the user is logged in
                $cookie_name = "user_logged_in";
                $cookie_value = "true";
                $cookie_expiry = time() + (86400 * 30); // 30 days
                setcookie($cookie_name, $cookie_value, $cookie_expiry, "/");

                $response = array(
                    "success" => true,
                    "message" => "User authenticated successfully",
                    "user_id" => $user['user_id'] // Include user ID in the response
                );
            } else {
                $response = array(
                    "success" => false,
                    "message" => "Invalid email or password"
                );
            }
        } else {
            $response = array(
                "success" => false,
                "message" => "Invalid email or password"
            );
        }
    } else {
        $response = array(
            "success" => false,
            "message" => "Invalid request method"
        );
    }
    header('Content-Type: application/json');
    echo json_encode($response);

    // Close the prepared statement
    $stmt->close();
} else {
    // Handle non-POST requests
    $response = array(
        "success" => false,
        "message" => "Invalid request method"
    );
    header('Content-Type: application/json');
    echo json_encode($response);
}

// Close the database connection
$conn->close();
?>