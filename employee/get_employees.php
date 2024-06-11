<?php
include 'db.php';

$sql = "SELECT * FROM employees";
$result = $conn->query($sql);

$employees = array();
while($row = $result->fetch_assoc()) {
    $employees[] = $row;
}
echo json_encode($employees);

$conn->close();
?>
