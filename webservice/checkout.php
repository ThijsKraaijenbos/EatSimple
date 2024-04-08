<?php
header('Content-Type: application/json'); // Set the content type to JSON
require 'database.php';

try {

    $items = json_decode($_POST["data"], true);

    foreach ($items as $index => $item) {
        $order_id = $item[0];
        $product_id = $item[1];

        $stmt = $pdo->prepare("INSERT INTO order_variant (order_id, product_id, amount) VALUES ($item[0],$item[1],$item[2])");
        // Execute the prepared statement
        $stmt->execute();
    }

} catch (PDOException $e) {
    // Handle database errors
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

?>
