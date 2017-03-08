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

	$sql = "SELECT * FROM personas WHERE tipo='c'";
	$resultset = $conn->query($sql);
	$clientes = array();
	while ($fila = $resultset->fetch_assoc()){
		$clientes[] = $fila;
	}
	$objeto_salida = array('arrayClientes' => $clientes);
	$JSONsalida = json_encode($objeto_salida);
	echo $JSONsalida;
?>