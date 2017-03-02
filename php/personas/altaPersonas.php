<?php
	$oPersona = json_decode($_POST['datos']);
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
	if ($conn->query($sqlComprueba)->num_rows == 0) {
		$sql = "INSERT INTO personas (DNI, NOMBRE, APELLIDOS, DIRECCION, EMAIL, TELEFONO, TIPO) VALUES ('$oPersona->dni', '$oPersona->nombre', '$oPersona->apellidos', '$oPersona->direccion', '$oPersona->email', '$oPersona->telefono', '$oPersona->tipo')";

		if ($conn->query($sql) === TRUE) {
		    $resultado =  "Alta de persona correcta";
		    $error = FALSE;
		} else {
		    $resultado = "Error: " . $sql . "<br>" . $conn->error;
		    $error = TRUE;
		}
	}else{
		$resultado = "Ese persona ya existe";
		$error = TRUE;
	}

	// Creo un "objeto" php creando un array asociativo
	$objeto_salida = array ( "mensaje" => "Alta de persona" , "resultado" => $resultado, "accion" => 400, "error" => $error );
	$json_salida = json_encode($objeto_salida);
	echo $json_salida;
	$conn->close();
?>