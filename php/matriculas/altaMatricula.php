<?php
	//Campos 
	$idMatricula = $_POST['idMatricula'];
	$cantidad = $_POST['cantidadAbonadaMatricula'];
	$fecha = $_POST['fechaMatricula'];
	$precio = $_POST['precioMatricula'];
	$dniCli = $_POST['clienteMatricula'];

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
	if ($conn->query($sqlComprueba)->num_rows == 0) {
		//Tras comprobar si existe la matricula, comprobamos si existe la persona
		$sqlComprueba = "SELECT * FROM personas WHERE DNI='".$dniCli."'";
		if ($conn->query($sqlComprueba)->num_rows > 0) {
			//Tras comprobar si existe la persona, comprobamos si la persona introducida ya esta en una matricula
			$sqlComprueba = "SELECT * FROM matriculas WHERE DNI_CLIENTE='".$dniCli."'";
			if ($conn->query($sqlComprueba)->num_rows == 0) {
				$sql = "INSERT INTO matriculas(ID_MATRICULA, CANTIDAD_ABONADA, FECHA, PRACTICO_APROBADO, TEORICO_APROBADO, PRECIO, DNI_CLIENTE) VALUES ('".$idMatricula."', '".$cantidad."', '".$fecha."', '0', '0', '".$precio."', '".$dniCli."')";
				if ($conn->query($sql) === TRUE) {
				    $resultado =  "Alta de matrícula correcta";
				    $error = FALSE;
				} else {
				    $resultado = "Error: " . $sql . "<br>" . $conn->error;
				    $error = TRUE;
				}
			}else{
				// Ese cliente ya esta en una matricula
				$resultado = "La persona introducida ya esta en una matrícula";
				$error = TRUE;
			}
		}else{
			//No existe el dni introducido
			$resultado = "La persona introducida no existe";
			$error = TRUE;
		}
	}else{
		$resultado = "Esa matrícula ya existe";
		$error = TRUE;
	}

	// Creo un "objeto" php creando un array asociativo
	$objeto_salida = array ( "mensaje" => "Alta de matricula" , "resultado" => $resultado, "accion" => 600, "error" => $error );
	$json_salida = json_encode($objeto_salida);
	echo $json_salida;
	$conn->close();
?>