<?php

// Check if POST data is received
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["data"])) {
    // Decode the received JSON data
    $items = json_decode($_POST["data"], true);

    // Validate and process the received data (e.g., insert into database)
    // For this example, let's just return the received data
    echo json_encode([
        "success" => true,
        "message" => "Data received successfully",
        "data" => $items
    ]);
} else {
    // Return an error message if no POST data is received
    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);
}

?>