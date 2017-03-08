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

	$sql = "SELECT * FROM personas WHERE tipo='p'";
	$resultset = $conn->query($sql);
	$profesores = array();
	while ($fila = $resultset->fetch_assoc()){
		$profesores[] = $fila;
	}
	$objeto_salida = array('arrayProfesores' => $profesores);
	$JSONsalida = json_encode($objeto_salida);
	echo $JSONsalida;
?>