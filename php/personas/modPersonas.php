<?php
	$oPersona = json_decode($_GET['datos']);
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

	$sqlComprueba = "SELECT * FROM personas WHERE DNI='".$oPersona->dni."'";
	//Compruebo si existe
	if ($conn->query($sqlComprueba)->num_rows > 0) {
		$sql = "UPDATE personas SET DNI='$oPersona->dni',NOMBRE='$oPersona->nombre',APELLIDOS='$oPersona->apellidos',DIRECCION='$oPersona->direccion',EMAIL='$oPersona->email',TELEFONO='$oPersona->telefono',TIPO='$oPersona->tipo' WHERE DNI='$oPersona->dni'";

		if ($conn->query($sql) === TRUE) {
		    $resultado =  "Modificación de persona correcta";
		    $error = FALSE;
		} else {
		    $resultado = "Error: " . $sql . "<br>" . $conn->error;
		    $error = TRUE;
		}
	}else{
		$resultado = "Esa persona no existe";
		$error = TRUE;
	}

	// Creo un "objeto" php creando un array asociativo
	$objeto_salida = array ( "mensaje" => "Modificacion de persona" , "resultado" => $resultado, "accion" => 500, "error" => $error );
	$json_salida = json_encode($objeto_salida);
	echo $json_salida;
	$conn->close();
?>