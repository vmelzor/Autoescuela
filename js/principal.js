var oAutoescuela = new Autoescuela();

//Eventos para mostrar  y ocultar formularios
window.addEventListener("load", ocultarFormularios);
document.getElementById("inicio").addEventListener("click", ocultarFormularios); 
document.getElementById("btnAltaPersona").addEventListener("click", mostrarAltaPersona); 
document.getElementById("btnAltaMatricula").addEventListener("click", mostrarAltaMatricula); 
document.getElementById("btnAltaClases").addEventListener("click", mostrarAltaClases); 
document.getElementById("btnAltaCoche").addEventListener("click", mostrarAltaCoche); 
document.getElementById("btnBajaPersona").addEventListener("click", mostrarBajaPersona); 
document.getElementById("btnBajaMatricula").addEventListener("click", mostrarBajaMatricula); 
document.getElementById("btnBajaCoche").addEventListener("click", mostrarBajaCoche); 
document.getElementById("btnAprobarTeorico").addEventListener("click", mostrarAprobarTeorico); 
document.getElementById("btnAprobarPractico").addEventListener("click", mostrarAprobarPractico); 
document.getElementById("btnMatricularCliente").addEventListener("click", mostrarMatricularCliente); 
document.getElementById("btnAsignarProfesorAClase").addEventListener("click", mostrarAsignarProfesorAClase); 
document.getElementById("btnListadoPersona").addEventListener("click", listadoPersona);
document.getElementById("btnListadoMatricula").addEventListener("click", listadoMatriculas);
document.getElementById("btnListadoClases").addEventListener("click", listadoClases);
document.getElementById("btnListadoCoche").addEventListener("click", listadoCoche);

//Funciones que muestran los formularios
function mostrarAltaPersona(){
	ocultarFormularios();
	document.formu_altaPersona.style.display = "block";
	document.formu_altaPersona.reset();	
}
function mostrarAltaMatricula(){
	ocultarFormularios();
	document.formu_altaMatricula.style.display = "block";
	document.formu_altaMatricula.reset();	
}
function mostrarAltaClases(){
	ocultarFormularios();
	document.formu_altaClases.style.display = "block";
	document.formu_altaClases.reset();	
}
function mostrarAltaCoche(){
	ocultarFormularios();
	document.formu_altaCoche.style.display = "block";
	document.formu_altaCoche.reset();	
}
function mostrarBajaPersona(){
	ocultarFormularios();
	document.formu_bajaPersona.style.display = "block";
	document.formu_bajaPersona.reset();	
}
function mostrarBajaMatricula(){
	ocultarFormularios();
	document.formu_bajaMatricula.style.display = "block";
	document.formu_bajaMatricula.reset();	
}
function mostrarBajaCoche(){
	ocultarFormularios();
	document.formu_bajaCoche.style.display = "block";
	document.formu_bajaCoche.reset();	
}
function mostrarAprobarTeorico(){
	ocultarFormularios();
	document.formu_aprobarTeorico.style.display = "block";
	document.formu_aprobarTeorico.reset();
}
function mostrarAprobarPractico(){
	ocultarFormularios();
	document.formu_aprobarPractico.style.display = "block";
	document.formu_aprobarPractico.reset();
}
function mostrarMatricularCliente(){
	ocultarFormularios();
	document.formu_matricularCliente.style.display = "block";
	document.formu_matricularCliente.reset();
}
function mostrarAsignarProfesorAClase(){
	ocultarFormularios();
	document.formu_asignarProfesor.style.display = "block";
	document.formu_asignarProfesor.reset();	
}
//Funcion que oculta todos los formularios
function ocultarFormularios(){
	document.formu_altaPersona.style.display = "none";
	document.formu_altaMatricula.style.display = "none";
	document.formu_altaCoche.style.display = "none";
	document.formu_altaClases.style.display = "none";
	document.formu_bajaCoche.style.display = "none";
	document.formu_bajaMatricula.style.display = "none";
	document.formu_bajaPersona.style.display = "none";
	document.formu_aprobarTeorico.style.display = "none";
	document.formu_aprobarPractico.style.display = "none";
	document.formu_matricularCliente.style.display = "none";
	document.formu_asignarProfesor.style.display = "none";
	document.formu_busquedaAvanzadaPersona.style.display = "none";
	document.formu_busquedaAvanzadaMatricula.style.display = "none";
	document.formu_busquedaAvanzadaClase.style.display = "none";
	document.formu_busquedaAvanzadaCoche.style.display = "none";
	document.getElementById("capa").style.display = "none";
	//Recojo en la array inputs todos los input que tengan las clase error 
	var inputs = document.querySelectorAll("input.error");
	for (var i=0; i<inputs.length; i++) {
		inputs[i].className = "form-control";
	}
}


//Eventos para añadir y mostrar datos al modelo
document.formu_altaPersona.añadir.addEventListener("click", frmAltaPersona);
document.formu_altaMatricula.añadir.addEventListener("click", frmAltaMatricula);
document.formu_altaCoche.añadir.addEventListener("click", frmAltaCoche);
document.formu_altaClases.añadir.addEventListener("click", frmAltaClases);
document.formu_bajaPersona.baja.addEventListener("click", frmBajaPersona);
document.formu_bajaMatricula.baja.addEventListener("click", frmBajaMatricula);
document.formu_bajaCoche.baja.addEventListener("click", frmBajaCoche);
document.formu_aprobarTeorico.mod.addEventListener("click", frmAprobarTeorico);
document.formu_aprobarPractico.mod.addEventListener("click", frmAprobarPractico);
document.formu_matricularCliente.mod.addEventListener("click", frmMatricularCliente);
document.formu_asignarProfesor.mod.addEventListener("click", frmAsignarProfesorAClase);
document.formu_busquedaAvanzadaPersona.buscar.addEventListener("click", listadoPersonaConValores);
document.formu_busquedaAvanzadaMatricula.buscar.addEventListener("click", listadoMatriculaConValores);
document.formu_busquedaAvanzadaClase.buscar.addEventListener("click", listadoClasesConValores);
document.formu_busquedaAvanzadaCoche.buscar.addEventListener("click", listadoCocheConValores);



//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////ALTAS////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

//Funcion para dar de alta a una persona
function frmAltaPersona(){
	var oForm = document.formu_altaPersona;
	var bValido = true;
	var sErrores = "";

	//Campo Nombre
	var sNombre = oForm.altaPersonaNombre.value.trim();
	var oExpReg = /^[a-zA-Z\s]{2,40}$/;
	if (oExpReg.test(sNombre) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Nombre incorrecto (Sintaxis: 2-40 Digitos)";
		//Marcar error
		oForm.altaPersonaNombre.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaPersonaNombre.className = "form-control";	
	}
	// Campo apellidos
	var sApellidos = oForm.altaPersonaApellidos.value.trim();
	oExpReg = /^[a-zA-Z\s]{3,40}$/;
	if (oExpReg.test(sApellidos) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Apellidos incorrecto (Sintaxis: 3-40 Digitos)";
		//Marcar error
		oForm.altaPersonaApellidos.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaPersonaApellidos.className = "form-control";	
	}
	// Campo dni
	var sDni = oForm.altaPersonaDni.value.trim();
	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>DNI incorrecto  (Sintaxis: XXXXXXXX-A)";
		//Marcar error
		oForm.altaPersonaDni.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaPersonaDni.className = "form-control";
	}
	// Campo direccion
	var sDireccion = oForm.altaPersonaDireccion.value.trim();
	oExpReg = /^[a-zA-Z\s]{10,40}$/; 
	if (oExpReg.test(sDireccion) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Direccion incorrecta (Sintaxis: 10-40 Digitos)";
		//Marcar error
		oForm.altaPersonaDireccion.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaPersonaDireccion.className = "form-control";	
	}
	// Campo email
	var sEmail = oForm.altaPersonaEmail.value.trim();
	oExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
	if (oExpReg.test(sEmail) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Email incorrecto (Sintaxis:  nombreusuario@servidor.dominio)";
		//Marcar error
		oForm.altaPersonaEmail.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.altaPersonaEmail.className = "form-control";	
	}
	// Campo tlf
	var sTlf = oForm.altaPersonaTlf.value.trim();
	oExpReg = /^[0-9-]{9}$/;
	if (oExpReg.test(sTlf) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Telefono incorrecto (Sintaxis: 9 Digitos)";
		//Marcar error
		oForm.altaPersonaTlf.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.altaPersonaTlf.className = "form-control";	
	}
	// Campo ID
	var sID = oForm.altaPersonaId.value.trim();
	var oExpReg = /^[0-9]{1,10}$/;
	if (oExpReg.test(sID) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>ID incorrecto (Sintaxis: 1-10 numeros)";
		//Marcar error
		oForm.altaPersonaId.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.altaPersonaId.className = "form-control";	
	}

	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la persona al modelo
		var sMensaje;
		if (oForm.persona.value == "profesor") {
			var oProfesor = new Profesor(sApellidos,sDireccion, sDni, sEmail, sNombre, sTlf, sID);
			sMensaje = oAutoescuela.altaPersona(oProfesor);
		}else{
			var oCliente = new Cliente(sApellidos,sDireccion, sDni, sEmail, sNombre, sTlf, sID);
			sMensaje = oAutoescuela.altaPersona(oCliente);
		}
		oForm.reset();
		toastr.info(sMensaje);
	}else{
		toastr.error(sErrores);
	}
}


//Funcion para dar de alta una matricula
function frmAltaMatricula(){
	var oForm = document.formu_altaMatricula;
	var bValido = true;
	var sErrores = "";

	//campo cantidad abonada
	var sCantidad = oForm.altaMatriculaCantidadAbonada.value.trim();
	oExpReg = /^[+-]?\d+(\.\d+)?$/; 
	if (oExpReg.test(sCantidad) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Cantidad abonado incorrecta (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.altaMatriculaCantidadAbonada.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaCantidadAbonada.className = "form-control";	
	}
	//campo fecha
	var dFecha = oForm.altaMatriculaFecha.value;
	if (dFecha=="") {
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Fecha incorrecta";
		//Marcar error
		oForm.altaMatriculaFecha.className = "form-control error";
	}else{
		oForm.altaMatriculaFecha.className = "form-control";	
	}

	//campo dni cliente
	var sDni = oForm.altaMatriculaDniCliente.value.trim();
	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>DNI de cliente incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.altaMatriculaDniCliente.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaDniCliente.className = "form-control";
	}
	//campo identificador matricula
	var sIdentificador = oForm.altaMatriculaIdMatricula.value.trim();
	oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Identificador de matricula incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.altaMatriculaIdMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaIdMatricula.className = "form-control";
	}
	//campo numero de practicas
	var sNPracticas = oForm.altaMatriculaNPracticas.value.trim();
	oExpReg = /^[0-9]{1,2}$/; 
	if (oExpReg.test(sNPracticas) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Nº de practicas incorrectas (Sintaxis: De 0 al 99)";
		//Marcar error
		oForm.altaMatriculaNPracticas.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaNPracticas.className = "form-control";
	}
	//campo precio
	var sPrecio = oForm.altaMatriculaPrecio.value.trim();
	oExpReg = /^[+-]?\d+(\.\d+)?$/; 
	if (oExpReg.test(sPrecio) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Precio incorrecto (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.altaMatriculaPrecio.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaPrecio.className = "form-control";	
	}
	
	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la matricula al modelo
		var sMensaje;
		var oPersona = oAutoescuela.BuscarPersona(sDni);
		if(oPersona instanceof Object){
			var oMatricula = new Matriculas(sCantidad, dFecha, oPersona, sIdentificador, sNPracticas, sPrecio);
			sMensaje = oAutoescuela.altaMatriculas(oMatricula);
			oForm.reset();
			toastr.info(sMensaje);
		}else{
			toastr.error(oPersona);
		}
	}else{
		toastr.error(sErrores);
	}
}

//Funcion para dar de alta una clase
function frmAltaClases(){
	var oForm = document.formu_altaClases;
	var bValido = true;
	var sErrores = "";

	//Campo ID
	var sIdentificador = oForm.altaClasesId.value.trim();
	var oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "Identificador incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.altaClasesId.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaClasesId.className = "form-control";
	}
	//Campo duración
	var sDuracion = oForm.altaClasesDuracion.value.trim();
	oExpReg = /^[0-9]{1,3}$/; 
	if (oExpReg.test(sDuracion) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Duracion incorrecta (Sintaxis: Del 1 al 999)";
		//Marcar error
		oForm.altaClasesDuracion.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaClasesDuracion.className = "form-control";
	}
	//campo fecha
	var dFecha = oForm.altaClasesFecha.value;
	if (dFecha=="") {
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Fecha incorrecta";
		//Marcar error
		oForm.altaClasesFecha.className = "form-control error";
	}else{
		oForm.altaClasesFecha.className = "form-control";	
	}
	//Campo hora
	var sHora = oForm.altaClasesHora.value.trim();
	oExpReg = /^[0-2][0-3]:[0-5][0-9]$/; 
	if (oExpReg.test(sHora) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Hora incorrecta (Sintaxis: HH:MM)";
		//Marcar error
		oForm.altaClasesHora.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaClasesHora.className = "form-control";
	}
	//Comprobamos si esta marcado Prácticas o Teóricas
	if (oForm.clase.value == "practica") {
		//Campo tarifa
		var sTarifa = oForm.altaClasesTarifa.value.trim();
		oExpReg = /^[+-]?\d+(\.\d+)?$/; 
		if (oExpReg.test(sTarifa) == false){
			if(bValido == true){
				bValido = false;		
			}
			sErrores += "<br>Tarifa incorrecta (Sintaxis: Numeros enteros o decimales(con .))";
			//Marcar error
			oForm.altaClasesTarifa.className = "form-control error";
			oForm.altaClasesAforo.className = "form-control";
		}else{
			//Desmarcar error
			oForm.altaClasesTarifa.className = "form-control";
			oForm.altaClasesAforo.className = "form-control";	
		}
	}else{
		//Campo aforo
		var sAforo = oForm.altaClasesAforo.value.trim();
		oExpReg = /^[0-9]{1,2}$/; 
		if (oExpReg.test(sAforo) == false){
			if(bValido == true){
				bValido = false;	
			}
			sErrores += "<br>Aforo incorrecto (Sintaxis: Del 1 al 99)";
			//Marcar error
			oForm.altaClasesAforo.className = "form-control error";
			oForm.altaClasesTarifa.className = "form-control";
		}else{
			//Desmarcar error
			oForm.altaClasesAforo.className = "form-control";
			oForm.altaClasesTarifa.className = "form-control";
		}
	}

	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la persona al modelo
		var sMensaje;

		if (oForm.clase.value == "practica"){
			var oPractica = new Practicas(sIdentificador, sDuracion, dFecha, sHora, sTarifa);
			sMensaje = oAutoescuela.altaClases(oPractica);
		}else{
			var oTeorica = new Teoricas(sIdentificador, sDuracion, dFecha, sHora, sAforo);
			sMensaje = oAutoescuela.altaClases(oTeorica);
		}
		toastr.info(sMensaje);
		oForm.reset();
	}else{
		toastr.error(sErrores);
	}
}

//Funcion para dar de alta un coche
function frmAltaCoche(){
	var oForm = document.formu_altaCoche;
	var bValido = true;
	var sErrores = "";	

	//Campo Marca
	var sMarca = oForm.altaCocheMarca.value.trim();
	var oExpReg = /^[a-zA-Z\s]{3,20}$/; 
	if (oExpReg.test(sMarca) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Marca incorrecta (Sintaxis: 3-20 Digitos)";
		//Marcar error
		oForm.altaCocheMarca.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaCocheMarca.className = "form-control";	
	}
	//Campo matricula
	var sMatricula = oForm.altaCocheMatricula.value.trim();
	oExpReg = /^[1-9]{4}\s[a-zA-Z]{3}/;
	if (oExpReg.test(sMatricula) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Matricula incorrecta (Sintaxis: XXXX AAA)";
		//Marcar error
		oForm.altaCocheMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaCocheMatricula.className = "form-control";	
	}
	//Campo modelo
	var sModelo = oForm.altaCocheModelo.value.trim();
	oExpReg = /^[a-zA-Z\s]{3,20}$/; 
	if (oExpReg.test(sModelo) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Modelo incorrecto (Sintaxis: 3-20 Digitos)";
		//Marcar error
		oForm.altaCocheModelo.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaCocheModelo.className = "form-control";	
	}

	//Comprobamos si el formulario es valido y añadimos el coche al modelo
	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir el coche al modelo
		var oCoche = new Coche(sMarca, sMatricula, sModelo);
		var sMensaje = oAutoescuela.altaCoche(oCoche);
		oForm.reset();
		toastr.info(sMensaje);
	}else{
		toastr.error(sErrores);
	}
}


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////BAJAS////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

//Funcion para dar de baja a una persona
function frmBajaPersona(){
	var oForm = document.formu_bajaPersona;

	// Campo dni
	var sDni = oForm.bajaPersonaDni.value.trim();
	var oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		toastr.error("DNI incorrecto  (Sintaxis: XXXXXXXX-A)");
		//Marcar error
		oForm.bajaPersonaDni.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.bajaPersonaDni.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar una persona del modelo
		var sMensaje = oAutoescuela.bajaPersona(sDni);
		oForm.reset();
		toastr.info(sMensaje);
	}
}

//Funcion para dar de baja un matricula
function frmBajaMatricula(){
	var oForm = document.formu_bajaMatricula;

	// Campo indetificador
	var sIdentificador = oForm.bajaCocheIdentificador.value.trim();
	var oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		toastr.error("Matricula incorrecta  (Sintaxis:  1-10 numeros)");
		//Marcar error
		oForm.bajaCocheIdentificador.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.bajaCocheIdentificador.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar una matricula del modelo
		var sMensaje = oAutoescuela.bajaMatricula(sIdentificador);
		oForm.reset();
		toastr.info(sMensaje);
	}
}

//Funcion para dar de baja un coche
function frmBajaCoche(){
	var oForm = document.formu_bajaCoche;

	//Campo matricula
	var sMatricula = oForm.bajaCocheMatricula.value.trim();
	var oExpReg = /^[1-9]{4}\s[a-zA-Z]{3}/;
	if (oExpReg.test(sMatricula) == false){
		toastr.error("Matricula incorrecta  (Sintaxis: XXXX AAA)");
		//Marcar error
		oForm.bajaCocheMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.bajaCocheMatricula.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar un coche del modelo
		var sMensaje = oAutoescuela.bajaCoche(sMatricula);
		oForm.reset();
		toastr.info(sMensaje);
	}
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////MODIFICACIONES//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function frmAprobarTeorico(){
	var oForm = document.formu_aprobarTeorico;

	//campo identificador matricula
	var sIdentificador = oForm.aprobarTeoricoMatricula.value.trim();
	oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		toastr.error("Identificador de matricula incorrecto (Sintaxis:  1-10 numeros)");
		//Marcar error
		oForm.aprobarTeoricoMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.aprobarTeoricoMatricula.className = "form-control";
		var sMensaje = oAutoescuela.apruebaTeorico(sIdentificador);
		oForm.reset();
		toastr.info(sMensaje);
	}
}

function frmAprobarPractico(){
	var oForm = document.formu_aprobarPractico;

	//campo identificador matricula
	var sIdentificador = oForm.aprobarPracticoMatricula.value.trim();
	oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		toastr.error("Identificador de matricula incorrecto (Sintaxis:  1-10 numeros)");
		//Marcar error
		oForm.aprobarPracticoMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.aprobarPracticoMatricula.className = "form-control";
		var sMensaje = oAutoescuela.apruebaPractico(sIdentificador);
		oForm.reset();
		toastr.info(sMensaje);
	}
}

function frmMatricularCliente(){
	var oForm = document.formu_matricularCliente;
	var bValido = true;
	var sErrores = "";

	//campo dni cliente
	var sDni = oForm.matricularClienteDni.value.trim();
	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "DNI de cliente incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.matricularClienteDni.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.matricularClienteDni.className = "form-control";
	}
	//Campo ID
	var sIdentificador = oForm.matricularClienteId.value.trim();
	var oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Identificador incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.matricularClienteId.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.matricularClienteId.className = "form-control";
	}

	//Comprobamos si el formulario es valido y matriculamos cliente
	if (bValido) {
		//Aquí es donde se hacen los metodos para matricular al cliente
		var sMensaje = oAutoescuela.matricularClienteEnClases(sDni, sIdentificador);
		oForm.reset();
		toastr.info(sMensaje);
	}else{
		toastr.error(sErrores);
	}
}

function frmAsignarProfesorAClase(){
	var oForm = document.formu_asignarProfesor;
	var bValido = true;
	var sErrores = "";

	//campo dni cliente
	var sDni = oForm.asignarProfDni.value.trim();
	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "DNI de cliente incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.asignarProfDni.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.asignarProfDni.className = "form-control";
	}
	//Campo ID
	var sIdentificador = oForm.asignarProfId.value.trim();
	var oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Identificador incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.asignarProfId.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.asignarProfId.className = "form-control";
	}

	//Comprobamos si el formulario es valido y matriculamos cliente
	if (bValido) {
		//Aquí es donde se hacen los metodos para matricular al cliente
		var sMensaje = oAutoescuela.AsignarProfesorAClases(sDni, sIdentificador);
		oForm.reset();
		toastr.info(sMensaje);
	}else{
		toastr.error(sErrores);
	}
}


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LISTADOS/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
var cont = 0;
function listadoPersona(){
	ocultarFormularios();
	document.formu_busquedaAvanzadaPersona.style.display = "block";
	document.formu_busquedaAvanzadaPersona.reset();
	listadoPersonaAvanzados("","");	
}
function listadoPersonaConValores(){
	var oForm = document.formu_busquedaAvanzadaPersona;
	var sClave = oForm.busquedaPersonaClave.value.trim();
	var sValor = oForm.busquedaPersonaValor.value.trim();

	listadoPersonaAvanzados(sClave, sValor);
}
function listadoPersonaAvanzados(clave, valor){
	var oCapa = document.getElementById("capa");
	oCapa.style.display = "block";
	if(cont > 0){
		oCapa.removeChild(oCapa.childNodes[0]);
	}
	oCapa.appendChild(oAutoescuela.ListadoPersonas());
	cont++;
}



function listadoMatriculas(){
	ocultarFormularios();
	document.formu_busquedaAvanzadaMatricula.style.display = "block";
	document.formu_busquedaAvanzadaMatricula.reset();
	listadoMatriculaAvanzados("","");		
}
function listadoMatriculaConValores(){
	var oForm = document.formu_busquedaAvanzadaMatricula;
	var sClave = oForm.busquedaMatriculaClave.value.trim();
	var sValor = oForm.busquedaMatriculaValor.value.trim();

	listadoMatriculaAvanzados(sClave, sValor);
}
function listadoMatriculaAvanzados(clave, valor){
	var oCapa = document.getElementById("capa");
	oCapa.style.display = "block";
	if(cont > 0){
		oCapa.removeChild(oCapa.childNodes[0]);
	}
	oCapa.appendChild(oAutoescuela.ListadoMatriculas());
	cont++;
}



function listadoClases(){
	ocultarFormularios();
	document.formu_busquedaAvanzadaClase.style.display = "block";
	document.formu_busquedaAvanzadaClase.reset();
	listadoClasesAvanzados("","");
}
function listadoClasesConValores(){
	var oForm = document.formu_busquedaAvanzadaClase;

	var sClave = oForm.busquedaClaseClave.value.trim();
	var sValor = oForm.busquedaClaseValor.value.trim();
	listadoClasesAvanzados(sClave, sValor);
}
function listadoClasesAvanzados(clave, valor){
	var oCapa = document.getElementById("capa");
	oCapa.style.display = "block";
	if(cont > 0){
		oCapa.removeChild(oCapa.childNodes[0]);
	}
	oCapa.appendChild(oAutoescuela.listadoClases(clave,valor));
	cont++;
}





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
	listadoCocheAvanzados(sClave, sValor);
}
function listadoCocheAvanzados(clave, valor){
	var oCapa = document.getElementById("capa");
	oCapa.style.display = "block";
	if(cont > 0){
		oCapa.removeChild(oCapa.childNodes[0]);
	}
	oCapa.appendChild(oAutoescuela.ListadoCoches());
	cont++;
}


	
