<?php
// Database connection parameters
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the raw POST data
    $post_data = file_get_contents("php://input");

    // Decode the JSON data sent from JavaScript
    $user_data = json_decode($post_data);

    // Check if JSON decoding was successful and if 'user_id' property exists
    if ($user_data && isset($user_data->user_id)) {
        $user_id = $user_data->user_id;
    } else {
        // Handle the case when JSON decoding fails or 'user_id' property is missing
        echo "Error: Invalid user data.";
        exit; // Stop further execution
    }
} else {
    // Set a default user_id if it's not a POST request
    $user_id = 0;
}

// Fetch form data
$data = array();

// Prepare the SQL statement
$query = 'SELECT * FROM events WHERE creator_id = ?';
$stmt = $conn->prepare($query);

// Check if the preparation of the SQL statement was successful
if ($stmt) {
    // Bind parameters
    $stmt->bind_param("i", $user_id);

    // Execute the query
    $stmt->execute();

    // Get the result set
    $result = $stmt->get_result();

    // Fetch data from the result set
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Converts the PHP array into a JSON object
    echo json_encode($data);

    // Close statement
    $stmt->close();
} else {
    // Handle the case when the preparation of the SQL statement fails
    echo "Error: Failed to prepare statement.";
}

// Close connection
mysqli_close($conn);
?>