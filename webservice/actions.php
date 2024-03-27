<?php
header('Content-Type: application/json'); // Set the content type to JSON
require 'database.php';

try {
    // Prepare SQL statement to fetch data
    $stmt = $pdo->prepare("SELECT * FROM types");

    // Execute the prepared statement
    $stmt->execute();

    // Fetch all rows as an associative array
    $items = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Output the data as JSON
    echo json_encode($items);

} catch (PDOException $e) {
    // Handle database errors
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

?>
