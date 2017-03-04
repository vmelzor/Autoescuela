document.getElementById("btnListadoPersona").addEventListener("click", listadoPersona);
document.formu_busquedaAvanzadaPersona.buscar.addEventListener("click", listadoPersonaConValores);
function listadoPersona(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaPersona.style.display = "block";
 	document.formu_busquedaAvanzadaPersona.reset();
 	listadoPersonasAvanzados("","");
}
 
function listadoPersonaConValores(){
 	var oForm = document.formu_busquedaAvanzadaPersona;

 	var sClave = oForm.busquedaPersonaClave.value.trim();
 	var sValor = oForm.busquedaPersonaValor.value.trim();

 	if (sClave == "Seleccione clave") {
 		listadoPersonasAvanzados("", "");	
 	}else{
		listadoPersonasAvanzados(sClave, sValor);
 	}
 	oForm.reset();
}

function listadoPersonasAvanzados(sclave, svalor){
	var oCoche = { 
			clave: sclave,
			valor: svalor
			};
		
		sParametros = "datos=" + JSON.stringify(oCoche);
	if(sclave != ""){
		verComentarios('php/personas/listadoPersonasAvanzado.php',sParametros);
	}
	else{
		verComentarios('php/personas/listadoPersonas.php',null);
	}
 }

document.getElementById("btnListadoMatricula").addEventListener("click", listadoMatriculas);
document.formu_busquedaAvanzadaMatricula.buscar.addEventListener("click", listadoMatriculaConValores);
function listadoMatriculas(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaMatricula.style.display = "block";
 	document.formu_busquedaAvanzadaMatricula.reset();
 	listadoMatriculasAvanzados("","");
}
 
function listadoMatriculaConValores(){
 	var oForm = document.formu_busquedaAvanzadaMatricula;

 	var sClave = oForm.busquedaMatriculaClave.value.trim();
 	var sValor = oForm.busquedaMatriculaValor.value.trim();

 	if (sClave == "Seleccione clave") {
 		listadoClaseAvanzados("", "");	
 	}else{
		listadoClaseAvanzados(sClave, sValor);
 	}
 	oForm.reset();
}

function listadoMatriculasAvanzados(sclave, svalor){
	var oCoche = { 
			clave: sclave,
			valor: svalor
			};
		
		sParametros = "datos=" + JSON.stringify(oCoche);
	if(sclave != ""){
		verComentarios('php/matriculas/listadoMatriculaAvanzado.php',sParametros);
	}
	else{
		verComentarios('php/matriculas/listadoMatricula.php',null);
	}
 }

document.getElementById("btnListadoClases").addEventListener("click", listadoClases);
document.formu_busquedaAvanzadaClase.buscar.addEventListener("click", listadoClasesConValores);
function listadoClases(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaClase.style.display = "block";
 	document.formu_busquedaAvanzadaClase.reset();
 	listadoClaseAvanzados("","");
}
 
function listadoClasesConValores(){
 	var oForm = document.formu_busquedaAvanzadaClase;

 	var sClave = oForm.busquedaClaseClave.value.trim();
 	var sValor = oForm.busquedaClaseValor.value.trim();

 	if (sClave == "Seleccione clave") {
 		listadoClaseAvanzados("", "");	
 	}else{
		listadoClaseAvanzados(sClave, sValor);
 	}
 	oForm.reset();
}

function listadoClaseAvanzados(sclave, svalor){
	var oCoche = { 
			clave: sclave,
			valor: svalor
			};
		
		sParametros = "datos=" + JSON.stringify(oCoche);
	if(sclave != ""){
		verComentarios('php/clases/listadoClasesAvanzado.php',sParametros);
	}
	else{
		verComentarios('php/clases/listadoClases.php',null);
	}
 }

document.getElementById("btnListadoCoche").addEventListener("click", listadoCoche);
document.formu_busquedaAvanzadaCoche.buscar.addEventListener("click", listadoCocheConValores);

function listadoCoche(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaCoche.style.display = "block";
 	document.formu_busquedaAvanzadaCoche.reset();
 	listadoCocheAvanzados("","");
}
 
function listadoCocheConValores(){
 	var oForm = document.formu_busquedaAvanzadaCoche;

 	var sClave = oForm.busquedaCocheClave.value.trim();
 	var sValor = oForm.busquedaCocheValor.value.trim();

 	if (sClave == "Seleccione clave") {
 		listadoCocheAvanzados("", "");	
 	}else{
		listadoCocheAvanzados(sClave, sValor);
 	}
 	oForm.reset();
}

function listadoCocheAvanzados(sclave, svalor){
	var oCoche = { 
			clave: sclave,
			valor: svalor
			};
		
		sParametros = "datos=" + JSON.stringify(oCoche);
	if(sclave != ""){
		verComentarios('php/coches/listadoCocheAvanzado.php',sParametros);
	}
	else{
		verComentarios('php/coches/listadoCoche.php',null);
	}
 }
 
 

 var conexion1;
function verComentarios(url,parametros){
	if(url==''){
		return;
	}
	
	if(parametros != null){
		conexion1 = inicializa_xhr();
		conexion1.open("POST",url,true);
		conexion1.onreadystatechange = procesarEventos;
		conexion1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		// SEGUNDO : hacer la peticion
		conexion1.send(sParametros);
	}
	else{
		conexion1=new XMLHttpRequest();
		conexion1.onreadystatechange = procesarEventos;
		conexion1.open("GET", url, true);
		conexion1.send();
	}
}

function procesarEventos(){
	var detalles = document.getElementById("capa");
	detalles.style.display = "block";
	if(conexion1.readyState == 4){
		console.log(JSON.parse(conexion1.responseText));
		var datos=JSON.parse(conexion1.responseText);
		var salida='';
		
		
		var titulo = datos["mensaje"];
		salida = "<h2>"+titulo+"<h2>";
		
		if(datos["resultado"].length == 0){
			salida += "<h2>Sin resultados<h2>";
		}
		else{
			salida += "<table border='1'>";
		
			salida += "<tr>";
			$.each(datos["resultado"][0], function(clave,valor) {
					salida += "<th>"+clave+"</th>";
			});
			salida += "</tr>";
			for(var f=0;f<datos["resultado"].length;f++)
			{
				
				salida += "<tr>";
				$.each(datos["resultado"][f], function(clave,valor) {
					salida += "<td>"+valor+"</td>";
				});
				salida += "</tr>";
			}
			salida += "</table>";
		}
		detalles.innerHTML = salida;
		} 
	else {
		detalles.innerHTML = 'Cargando...';
	}
}