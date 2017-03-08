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

	$sql = "SELECT * FROM coches";
	$resultset = $conn->query($sql);
	$coches = array();
	while ($fila = $resultset->fetch_assoc()){
		$coches[] = $fila;
	}
	$objeto_salida = array('arrayCoches' => $coches);
	$JSONsalida = json_encode($objeto_salida);
	echo $JSONsalida;
?>