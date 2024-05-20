<?php

include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (isset($email) && isset($password)) {
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if ($user) {
            if (password_verify($password, $user['password'])) {
                $response = array(
                    "success" => true,
                    "message" => "User authenticated successfully"

                );

                $query = "SELECT user_id FROM users WHERE email = ?";
                $stmt = $conn->prepare($query);
                $stmt->bind_param("s", $email);
                $stmt->execute();
                $result = $stmt->get_result();

            } else {
                $response = array(
                    "success" => false,
                    "message" => "Invalid email or password"
                );
            }
        } else {
            $response = array(
                "success" => false,
                "message" => "Invalid email or password"
            );
        }
    } else {
        $response = array(
            "success" => false,
            "message" => "Invalid request method"
        );
    }
    header('Content-Type: application/json');
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user_id = $row['user_id'];
        $response["user_id"] = $user_id;
    }
    echo json_encode($response);
    $conn->close();
}
?>