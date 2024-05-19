<?php
$servername = "mi-linux.wlv.ac.uk";
$username = "2038837";
$password = "33860l";
$dbname = "db2038837";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);

} else {
    echo "Connected";
}
?>