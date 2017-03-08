<?php
// Cabecera para indicar que vamos a enviar datos JSON y que no haga cacheo de los datos. NO HACE FALTA EN POST
header("Content-Type: text/xml");
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Configuración BASE DE DATOS MYSQL
$oCoche = json_decode($_POST['datos']);
$servidor  = "localhost";
$basedatos = "autoescuela";
$usuario   = "root";
$password  = "";

//Datos de busqueda
$sql = "select * from coches where ".$oCoche->clave." LIKE '%".$oCoche->valor."%'";

// Creamos la conexión al servidor.
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

// Seleccionar la base de datos en esa conexion.
mysql_select_db($basedatos, $conexion) or die(mysql_error());

// Consulta SQL para obtener los datos de los centros.


$resultados = mysql_query($sql, $conexion) or die(mysql_error());
$respuesta="<?xml version='1.0' encoding='UTF-8'?><coches>";
while($fila=mysql_fetch_assoc($resultados)){
    $respuesta.="<coche>";
        $respuesta.="<matricula>".$fila['MATRICULA']."</matricula>";
        $respuesta.="<marca>".$fila['MARCA']."</marca>";
        $respuesta.="<modelo>".$fila['MODELO']."</modelo>";
    $respuesta.="</coche>";
}
$respuesta.="</coches>";
echo $respuesta;
mysql_close($conexion);

?> 