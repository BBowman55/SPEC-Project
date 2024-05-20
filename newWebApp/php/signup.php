<?php
session_start();

// Database connection parameters  
include 'db_connect.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email or password are set
    if (isset($email) && isset($password)) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (email, password) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $email, $hashed_password);

        if ($stmt->execute()) {
            $response = array(
                "success" => true,
                "message" => "User created successfully"
            );
        } else {
            $response = array(
                "success" => false,
                "message" => "Error creating user"
            );
        }

        $stmt->close();
    } else {
        $response = array(
            "success" => false,
            "message" => "Invalid request method"
        );
    }
    header('Content-Type: application/json');

    echo json_encode($response);
    $conn->close();
}
?>