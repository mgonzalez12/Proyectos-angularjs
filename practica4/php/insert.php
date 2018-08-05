<?php
	include 'student.php';
	$obj = new Student();
	//json_decode — Decodifica un string de JSON
	// file_get_contents — Transmite un fichero completo a una cadena
	$data = json_decode(file_get_contents("php://input"));

	$result = $obj->create_student_info($data);
	$message['message'] = $result;
	echo json_encode($message);
?>