<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "college_dashboard");

$result = $conn->query("SELECT * FROM attendance ORDER BY date DESC");

$records = [];
while ($row = $result->fetch_assoc()) {
  $records[] = $row;
}

echo json_encode($records);
?>
