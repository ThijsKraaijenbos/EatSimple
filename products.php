<?php
//header('Content-Type: application/json'); // Set the content type to JSON
//require 'database.php';
//
//try {
//
//    if (isset($_GET['id'])) {
//        // Retrieve the 'id' value from the URL
//        $id = $_GET['id'];
//
//        // Prepare SQL statement to fetch data
//        $stmt = $pdo->prepare("SELECT * FROM types WHERE product_id = :id");
//
//        // Bind the 'id' parameter
//        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
//
//        // Execute the prepared statement
//        $stmt->execute();
//
//        // Fetch all rows as an associative array
//        $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
//
//        // Output the data as JSON
//        echo json_encode($items);
//    } else {
//        // Handle the case where 'id' parameter is not set in the URL
//        echo json_encode(['error' => 'ID parameter is missing from the URL']);
//    }
//
//} catch (PDOException $e) {
//    // Handle database errors
//    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
//}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Eat Simple</title>
    <link rel="stylesheet" href="css/index.css">
    <script type="text/javascript" src="js/task.js" defer></script>
</head>
<body>
<header class="index_header">
    <img src="img/eatsimplelogo2.png" alt="" id="eten-logo">
</header>

<main class="products-main">
    <section id="container-producten">  <!-- Roshan Changed -->

    </section>

    <dialog class="products-modal">
        <button class="modal-close">❌</button>

        <div id="cart-list"></div>

        <a href="checkout.html" class="checkout">Bestellen</a>

    </dialog>
</main>

<footer></footer>
</body>

</html>
