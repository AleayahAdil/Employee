<?php
include 'db.php';

$id = $_GET['id'];

$sql = "SELECT * FROM employees WHERE id=$id";
$result = $conn->query($sql);

$employee = $result->fetch_assoc();
echo json_encode($employee);

$conn->close();
?>
