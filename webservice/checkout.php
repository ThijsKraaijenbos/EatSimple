<?php
header('Content-Type: application/json');
require 'database.php'; // Include the database connection code

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get the POST data from JavaScript
$data = json_decode(file_get_contents("php://input"), true);


// Validate the data
if (!is_array($data)) {
    echo json_encode(["success" => false, "message" => "Invalid data format"]);
    exit;
}

$cart = $data;

foreach ($cart as $item) {
    $order_id = $item[0];
    $product_id = $item[1];

    // Prepare SQL query
    $sql = "INSERT INTO order_variant (order_id, product_id) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        echo json_encode(["success" => false, "message" => "SQL preparation failed: " . $conn->error]);
        exit;
    }

    // Bind parameters and execute
    if (!$stmt->bind_param("ii", $order_id, $product_id) || !$stmt->execute()) {
        echo json_encode(["success" => false, "message" => "SQL execution failed: " . $stmt->error]);
        exit;
    }

    $stmt->close();
}

echo json_encode(["success" => true, "message" => "Data inserted successfully"]);

$conn->close();
?>
