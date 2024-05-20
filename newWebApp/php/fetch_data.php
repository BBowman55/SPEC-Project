<?php
// Database connection parameters
include 'db_connect.php';

// Fetch form data
$data = array();

$query = 'SELECT * FROM events';
$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Converts the PHP array into a JSON object
echo json_encode($data);

// Close connection
mysqli_close($conn);

?>