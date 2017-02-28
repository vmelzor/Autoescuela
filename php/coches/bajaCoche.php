<?php

$matricula = $_POST['matricula'];

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

$sql = 'DELETE FROM coches WHERE MATRICULA = "'.$matricula.'"';
// $sql = "DELETE FROM coches WHERE MATRICULA = '1222 eww'";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Baja de coche correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Baja de coche" , "resultado" => $resultado, "accion" => 200, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>