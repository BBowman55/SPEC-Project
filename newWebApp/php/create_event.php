<?php
session_start(); // Start the session
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // Retrieve event data from the form
    $name = $_POST['title'];
    $description = $_POST['descriptionInput'];
    $date = $_POST['eventDate'];
    $time = $_POST['eventTime'];

    // Retrieve creator ID from session
    if (isset($_SESSION['user_id'])) {
        $creator_id = $_SESSION['user_id'];
    } else {
        // Redirect to login page or handle the case where user is not logged in
        header('Location: login.php');
        exit;
    }

    // Insert event into the database
    $sql = "INSERT INTO events (name, description, date, time, creator_id) 
            VALUES ('$name', '$description', '$date', '$time', '$creator_id')";
    if (mysqli_query($conn, $sql)) {
        echo "Event created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
} else {
    echo "Invalid request method";
}

mysqli_close($conn);
?>