<?php
// Cabecera para indicar que vamos a enviar datos JSON y que no haga cacheo de los datos. NO HACE FALTA EN POST
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Configuración BASE DE DATOS MYSQL
$oPersona = json_decode($_POST['datos']);
$servidor  = "localhost";
$basedatos = "autoescuela";
$usuario   = "root";
$password  = "";

//Datos de busqueda
$sql = "select `DNI`,`NOMBRE`,`APELLIDOS`,`DIRECCION`,`EMAIL`,`TELEFONO`, case when `TIPO` = 'P' then 'Profesor' when `TIPO` = 'C' then 'Cliente' end as `TIPO` from personas where ".$oPersona->clave." LIKE '%".$oPersona->valor."%'";

// Creamos la conexión al servidor.
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

// Seleccionar la base de datos en esa conexion.
mysql_select_db($basedatos, $conexion) or die(mysql_error());

// Consulta SQL para obtener los datos de los centros.

$texto = "<table border='1' class='table small'>";
$texto .= "<tr><th>DNI</th><th>NOMBRE</th><th>APELLIDOS</th><th>DIRECCION</th><th>EMAIL</th><th>TELEFONO</th><th>TIPO</th></tr>";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());
while ($fila = mysql_fetch_array($resultados, MYSQL_ASSOC)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
    $texto .= "<tr><td>".$fila["DNI"]."</td><td>".$fila["NOMBRE"]."</td>
	<td>".$fila["APELLIDOS"]."</td><td>".$fila["DIRECCION"]."</td><td>".$fila["EMAIL"]."</td>
	<td>".$fila["TELEFONO"]."</td><td>".$fila["TIPO"]."</td></tr>";
}
$texto .= "</table>";
// Creo un "objeto" php creando un array asociativo
echo $texto;
mysql_close($conexion);

?> 