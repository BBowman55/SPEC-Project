<?php
include_once 'db_connect.php';
session_start();
if (!isset($_SESSION['user_id'])) {
    header("HTTP/1.1 401 Unauthorized");
    exit;
}
$user_id = $_SESSION['user_id'];
$eventName = $_POST['eventName'];
$eventDescription = $_POST['eventDescription'];
$eventDate = $_POST['eventDate'];
$eventTime = $_POST['eventTime'];

$stmt = $conn->prepare("INSERT INTO events (creator_id, name, description, date, time) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("issss", $user_id, $eventName, $eventDescription, $eventDate, $eventTime);
$stmt->execute();

echo "Event created successfully!";
?>