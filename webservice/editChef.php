<?php
header('Content-Type: application/json'); // Set the content type to JSON
require 'database.php';

//Based on the existence of the GET parameter, 1 of the 2 functions will be called
$stmt = '';
if ($_GET['id'] != 'null') {
    $id = $_GET['id'];
    $stmt = $pdo->prepare("UPDATE `order_variant` SET `is_serverd`= 1 WHERE order_variant_id =" . $id);
}

// Execute the prepared statement
$stmt->execute();

// Fetch all rows as an associative array
$items = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Output the data as JSON
echo json_encode($items);


//echo json_encode($data);
exit();
