<?php
header('Content-Type: application/json'); // Set the content type to JSON
require 'database.php';

//Based on the existence of the GET parameter, 1 of the 2 functions will be called
$stmt = '';

    $stmt = $pdo->prepare("SELECT * FROM orders
	INNER JOIN
    order_variant ON orders.order_id = order_variant.order_id
    INNER JOIN
    types ON types.type_id = order_variant.product_id;");


// Execute the prepared statement
$stmt->execute();

// Fetch all rows as an associative array
$items = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Output the data as JSON
echo json_encode($items);


//echo json_encode($data);
exit();
