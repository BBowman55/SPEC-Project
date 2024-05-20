<?php
include 'db_connect.php';

$sql = "SELECT user_id FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

$row = $result->fetch_assoc();
$user_id = $row['user_id'];

print_r($user_id);

echo "<script>var userId = " . $user_id . ";</script>";
mysqli_free_result($result);
$conn->close();

?>