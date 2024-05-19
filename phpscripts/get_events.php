<?php
include_once 'db_connect.php';
session_start();
$response = [];
if (!isset($_SESSION['user_id'])) {
    // User is not authenticated
    $response['message'] = "User is not authenticated!";
    $response['events'] = [];
} else {
    // User is authenticated
    $user_id = $_SESSION['user_id'];
    $stmt = $conn->prepare("SELECT * FROM events WHERE creator_id = ?");
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $events = $result->fetch_all(MYSQLI_ASSOC);
    $response['message'] = "User is authenticated!";
    $response['events'] = $events;
}
header('Content-Type: application/json');
echo json_encode($response);
?>