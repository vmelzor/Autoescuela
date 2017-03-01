<?php
	$idMatricula = $_POST['id'];
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

	$sqlComprueba = "SELECT * FROM matriculas WHERE ID_MATRICULA='".$idMatricula."'";
	//Compruebo si existe la matricula introducida
	if ($conn->query($sqlComprueba)->num_rows > 0) {
		$sql = "DELETE FROM matriculas WHERE ID_MATRICULA='".$idMatricula."'";
		if ($conn->query($sql) === TRUE) {
			$resultado =  "Baja de matrícula correcta";
			$error = FALSE;
		} else {
			$resultado = "Error: " . $sql . "<br>" . $conn->error;
			$error = TRUE;
		}
	}else{
		$resultado = "Esa matrícula no existe";
		$error = TRUE;
	}

	// Creo un "objeto" php creando un array asociativo
	$objeto_salida = array ( "mensaje" => "Modificación de matricula" , "resultado" => $resultado, "accion" => 700, "error" => $error );
	$json_salida = json_encode($objeto_salida);
	echo $json_salida;
	$conn->close();
?>