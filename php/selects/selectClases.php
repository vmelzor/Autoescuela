<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "autoescuela";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Conexion fallida: " . $conn->connect_error);
	}

	$sql = "SELECT * FROM clases";
	$resultset = $conn->query($sql);
	$clases = array();
	while ($fila = $resultset->fetch_assoc()){
		$clases[] = $fila;
	}
	$objeto_salida = array('arrayClases' => $clases);
	$JSONsalida = json_encode($objeto_salida);
	echo $JSONsalida;
?>