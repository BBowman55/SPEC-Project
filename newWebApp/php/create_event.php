<?php
include 'db_connect.php'; 

foreach ($events as $event) {
    $name = $mysqli->real_escape_string($event['name']);
    $description = $mysqli->real_escape_string($event['description']);
    $date = $mysqli->real_escape_string($event['date']);
    $time = $mysqli->real_escape_string($event['time']);
    $creator = $mysqli->real_escape_string($event['creator']);

    $sql = "INSERT INTO events (name, description, date, time, creator) VALUES ('$name', '$description', '$date', '$time', '$creator')";

    if ($mysqli->query($sql) === TRUE) {
        echo "Event inserted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $mysqli->error;
    }
}

