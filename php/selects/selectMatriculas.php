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

	$sql = "SELECT * FROM matriculas";
	$resultset = $conn->query($sql);
	$matriculas = array();
	while ($fila = $resultset->fetch_assoc()){
		$matriculas[] = $fila;
	}
	$objeto_salida = array('arrayMatriculas' => $matriculas);
	$JSONsalida = json_encode($objeto_salida);
	echo $JSONsalida;
?>