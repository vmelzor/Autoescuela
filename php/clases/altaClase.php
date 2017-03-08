<?php
	$oClase = json_decode($_POST['datos']);
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

	$sqlComprueba = "SELECT * FROM clases WHERE ID_CLASES='".$oClase->id."'";
	//Compruebo si existe la clase introducida
	if ($conn->query($sqlComprueba)->num_rows == 0) {
		//Compruebo si el cliente seleccionado ya esta en otra clase
		$sqlComprueba = "SELECT * FROM clases WHERE DNI_CLIENTE='".$oClase->dniCli."'";
		if ($conn->query($sqlComprueba)->num_rows == 0) {
			//insertar clase
			$sql = "INSERT INTO clases(ID_CLASES, DURACION, HORA, FECHA, TARIFA, MATRICULA_COCHE, DNI_PROFESOR, DNI_CLIENTE) VALUES ('$oClase->id', '$oClase->duracion', '$oClase->hora', '".$oClase->fecha."', '$oClase->tarifa', '$oClase->matricula', '$oClase->dniProf', '$oClase->dniCli')";
			if ($conn->query($sql) === TRUE) {
			    $resultado =  "Alta de clase correcta";
			    $error = FALSE;
			} else {
			    $resultado = "Error: " . $sql . "<br>" . $conn->error;
			    $error = TRUE;
			}
		}else{
			$resultado = "Ese cliente ya esta en una clase";
			$error = TRUE;
		}
	}else{
		$resultado = "Esa clase ya existe ya existe";
		$error = TRUE;
	}

	// Creo un "objeto" php creando un array asociativo
	$objeto_salida = array ( "mensaje" => "Alta de clase" , "resultado" => $resultado, "accion" => 900, "error" => $error );
	$json_salida = json_encode($objeto_salida);
	echo $json_salida;
	$conn->close();
?>