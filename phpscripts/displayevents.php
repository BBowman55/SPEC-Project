<?php
include 'db_connect.php';

$sql = "SELECT * FROM events WHERE creator_id='$user_id' ";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // User exists, sign-in successful
    echo "Signed in successfully!";
    // You can set session variables or cookies here if needed
} else {
    // User does not exist or invalid credentials
    echo "Invalid email or password!";
}


$conn->close();

?>