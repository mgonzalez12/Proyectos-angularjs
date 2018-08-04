<?php
	header("Content-Type: application/json; charset-UTF-8");

	$con = new mysqli("localhost","root","","usuario_paises");

	$resultado = $con->query("SELECT * FROM usuario");

	$salida = "";

	while ($fila = $resultado->fetch_array(MYSQLI_ASSOC)) {
		
		$arr[]=['ID'=>$fila["id"],
				'Nombre' =>$fila["nombre"],
				'Pais' => $fila["pais"]]; 
	}
	
	echo json_encode(['registros'=>$arr]);
	$con->close(); 

?>


