<?php
	$oCoche = json_decode($_POST['datos']);
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

	$sqlComprueba = "SELECT * FROM coches WHERE MATRICULA='".$oCoche->matricula."'";
	//Compruebo si existe
	if ($conn->query($sqlComprueba)->num_rows == 0) {
		$sql = "INSERT INTO coches (MATRICULA,MARCA,MODELO) VALUES ( '$oCoche->matricula' , '$oCoche->marca' ,'$oCoche->modelo')";
		if ($conn->query($sql) === TRUE) {
		    $resultado =  "Alta de coche correcta";
		    $error = FALSE;
		} else {
		    $resultado = "Error: " . $sql . "<br>" . $conn->error;
		    $error = TRUE;
		}
	}else{
		$resultado = "Esa coche ya existe";
		$error = TRUE;
	}

	// Creo un "objeto" php creando un array asociativo
	$objeto_salida = array ( "mensaje" => "Alta de coche" , "resultado" => $resultado, "accion" => 100, "error" => $error );
	$json_salida = json_encode($objeto_salida);
	echo $json_salida;
	$conn->close();
?>