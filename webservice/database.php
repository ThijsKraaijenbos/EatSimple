<?php

$host = 'localhost'; // Change this to your database hostname
$dbname = 'eatsimple'; // Change this to your database name
$user = 'root'; // Change this to your database username
$pass = ''; // Change this to your database password

try {
    // Create a new PDO instance
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);

    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Optionally, you can set character set
    $pdo->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    // Display error message
    echo "Connection failed: " . $e->getMessage();
    die();
}

?>
