<?php
include 'db.php';

$name = $_POST['name'];
$position = $_POST['position'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$sql = "INSERT INTO employees (name, position, email, phone) VALUES ('$name', '$position', '$email', '$phone')";
$conn->query($sql);

$conn->close();
?>
