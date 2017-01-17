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
//Funcion que oculta todos los formularios
function ocultarFormularios(){
	document.formu_altaPersona.style.display = "none";
	document.formu_altaMatricula.style.display = "none";
	document.formu_altaCoche.style.display = "none";
	document.formu_altaClases.style.display = "none";
	document.formu_bajaCoche.style.display = "none";
	document.formu_bajaMatricula.style.display = "none";
	document.formu_bajaPersona.style.display = "none";
}


//Eventos para añadir y mostrar datos al modelo
document.formu_altaPersona.añadir.addEventListener("click", frmAltaPersona);
document.formu_altaMatricula.añadir.addEventListener("click", frmAltaMatricula);
document.formu_altaMatricula.mod.addEventListener("click", frmModificarMatricula);
document.formu_altaCoche.añadir.addEventListener("click", frmAltaCoche);
document.formu_altaClases.añadir.addEventListener("click", frmAltaClases);
document.formu_bajaPersona.baja.addEventListener("click", frmBajaPersona);
document.formu_bajaMatricula.baja.addEventListener("click", frmBajaMatricula);
document.formu_bajaCoche.baja.addEventListener("click", frmBajaCoche);


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
		sErrores += "\nNombre incorrecto (Sintaxis: 2-40 Digitos)";
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
		sErrores += "\nApellidos incorrecto (Sintaxis: 3-40 Digitos)";
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
		sErrores += "\nDNI incorrecto  (Sintaxis: XXXXXXXX-A)";
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
		sErrores += "\nDireccion incorrecta (Sintaxis: 10-40 Digitos)";
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
		sErrores += "\nEmail incorrecto";
		//Marcar error
		oForm.altaPersonaEmail.className = "form-control error (Sintaxis:  nombreusuario@servidor.dominio) ";
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
		sErrores += "\nTelefono incorrecto (Sintaxis: 9 Digitos)";
		//Marcar error
		oForm.altaPersonaTlf.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.altaPersonaTlf.className = "form-control";	
	}

	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la persona al modelo
		alert("Persona dada de alta correctamente");
	}else{
		alert(sErrores);
	}
}


//Funcion para dar de alta una matricula
function frmAltaMatricula(){
	var valido = validarFormuAltaMatricula();
	//Comprobamos si el formulario es valido y añadimos la matricula al modelo
	if (valido) {
		//Aquí es donde se hacen los metodos para añadir la matricula al modelo
		alert("Matricula dada de alta correctamente");
	}
}
//Funcion para modificar una matricula
function frmModificarMatricula(){
	var valido = validarFormuAltaMatricula();
	//Comprobamos si el formulario es valido y modificamos la matricula del modelo
	if (valido) {
		//Aquí es donde se hacen los metodos para modificar la matricula del modelo
		alert("Matricula modificada correctamente");
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
		sErrores += "\nIdentificador incorrecto (Sintaxis:  1-10 numeros)";
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
		sErrores += "\nDuracion incorrecta (Sintaxis: Del 1 al 999)";
		//Marcar error
		oForm.altaClasesDuracion.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaClasesDuracion.className = "form-control";
	}
	//Campo hora
	var sHora = oForm.altaClasesHora.value.trim();
	oExpReg = /^[0-2][0-3]:[0-5][0-9]$/; 
	if (oExpReg.test(sHora) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "\nHora incorrecta (Sintaxis: HH:MM)";
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
			sErrores += "\nTarifa incorrecta (Sintaxis: Numeros enteros o decimales(con .))";
			//Marcar error
			oForm.altaClasesTarifa.className = "form-control error";
			oForm.altaClasesAforo.className = "form-control";
		}else{
			//Desmarcar error
			oForm.altaClasesTarifa.className = "form-control";
			oForm.altaClasesAforo.className = "form-control error";	
		}
	}else{
		//Campo aforo
		var sAforo = oForm.altaClasesAforo.value.trim();
		oExpReg = /^[0-9]{1,2}$/; 
		if (oExpReg.test(sAforo) == false){
			if(bValido == true){
				bValido = false;	
			}
			sErrores += "\nAforo incorrecto (Sintaxis: Del 1 al 99)";
			//Marcar error
			oForm.altaClasesAforo.className = "form-control error";
			oForm.altaClasesTarifa.className = "form-control";
		}else{
			//Desmarcar error
			oForm.altaClasesAforo.className = "form-control";
			oForm.altaClasesTarifa.className = "form-control error";
		}
	}

	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la persona al modelo
		alert("Clase dada de alta correctamente");
	}else{
		alert(sErrores);
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
		sErrores += "\nMarca incorrecta (Sintaxis: 3-20 Digitos)";
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
		sErrores += "\nMatricula incorrecta (Sintaxis: XXXX AAA)";
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
		sErrores += "\nModelo incorrecto (Sintaxis: 3-20 Digitos)";
		//Marcar error
		oForm.altaCocheModelo.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaCocheModelo.className = "form-control";	
	}

	//Comprobamos si el formulario es valido y añadimos el coche al modelo
	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir el coche al modelo
		alert("Coche dado de alta correctamente");
	}else{
		alert(sErrores);
	}
}


//Funcion para dar de baja a una persona
function frmBajaPersona(){
	var oForm = document.formu_bajaPersona;

	// Campo dni
	var sDni = oForm.bajaCocheDni.value.trim();
	var oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		alert("DNI incorrecto  (Sintaxis: XXXXXXXX-A)");
		//Marcar error
		oForm.bajaCocheDni.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.bajaCocheDni.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar a una persona del modelo
		alert("Persona dada de baja correctamente");
	}
}

//Funcion para dar de baja un matricula
function frmBajaMatricula(){
	var oForm = document.formu_bajaMatricula;

	// Campo indetificador
	var sIdentificador = oForm.bajaCocheIdentificador.value.trim();
	var oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		alert("Matricula incorrecta  (Sintaxis:  1-10 numeros)");
		//Marcar error
		oForm.bajaCocheIdentificador.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.bajaCocheIdentificador.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar una matricula del modelo
		alert("Matricula dada de baja correctamente");
	}
}

//Funcion para dar de baja un coche
function frmBajaCoche(){
	var oForm = document.formu_bajaCoche;

	//Campo matricula
	var sMatricula = oForm.bajaCocheMatricula.value.trim();
	var oExpReg = /^[1-9]{4}\s[a-zA-Z]{3}/;
	if (oExpReg.test(sMatricula) == false){
		alert("Matricula incorrecta  (Sintaxis: XXXX AAA)");
		//Marcar error
		oForm.bajaCocheMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.bajaCocheMatricula.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar un coche del modelo
		alert("Coche dado de baja correctamente");
	}
}

//Funcion para validar el formulario de alta matricula
function validarFormuAltaMatricula(){
	var oForm = document.formu_altaMatricula;
	var bValido = true;
	var sErrores = "";

	//campo veces que se ha examinado
	var sVeces = oForm.altaMatriculaVecesExamen.value.trim();
	var oExpReg = /^[0-9]{1,2}$/; 
	if (oExpReg.test(sVeces) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "\nNº de veces incorrecto (Sintaxis: De 0 a 99)";
		//Marcar error
		oForm.altaMatriculaVecesExamen.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaVecesExamen.className = "form-control";	
	}
	//campo cantidad abonada
	var sCantidad = oForm.altaMatriculaCantidadAbonada.value.trim();
	oExpReg = /^[+-]?\d+(\.\d+)?$/; 
	if (oExpReg.test(sCantidad) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "\nCantidad abonado incorrecta (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.altaMatriculaCantidadAbonada.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaCantidadAbonada.className = "form-control";	
	}
	//campo identificador cliente
	var sIdentificador = oForm.altaMatriculaIdCliente.value.trim();
	oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "\nIdentificador de cliente incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.altaMatriculaIdCliente.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaIdCliente.className = "form-control";
	}
	//campo identificador matricula
	var sIdentificador = oForm.altaMatriculaIdMatricula.value.trim();
	oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "\nIdentificador de matricula incorrecto (Sintaxis:  1-10 numeros)";
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
		sErrores += "\nNº de practicas incorrectas (Sintaxis: De 0 al 99)";
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
		sErrores += "\nPrecio incorrecto (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.altaMatriculaPrecio.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.altaMatriculaPrecio.className = "form-control";	
	}
	
	if (bValido) {
		return true;
	}else{
		alert(sErrores);
	}
}