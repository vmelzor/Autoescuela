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

$sql = "UPDATE coches SET MATRICULA='$oCoche->matricula', MARCA='$oCoche->marca', MODELO='$oCoche->modelo' WHERE MATRICULA='$oCoche->matricula'";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Modificación de coche correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Modificación de coche" , "resultado" => $resultado, "accion" => 300, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>