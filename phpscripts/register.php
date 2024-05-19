<?php
// Database connection parameters

include 'db_connect.php';



// Fetch form data
$username = $_POST['signupUsername'];
$email = $_POST['signupEmail'];
$password = $_POST['signupPassword'];

// SQL to insert data into table
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>