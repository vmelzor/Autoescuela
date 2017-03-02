var oAutoescuela = new Autoescuela();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////FORMULARIOS///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#btnGestionPersona").click(function(){ oDlgFormuGestionPersona.dialog("open"); });
$("#btnGestionMatricula").click(function(){ oDlgFormuGestionMatricula.dialog("open"); });
$("#btnGestionClases").click(function(){ oDlgFormuGestionClases.dialog("open"); });
$("#btnGestionCoche").click(function(){ oDlgFormuGestionCoche.dialog("open"); });

// DIALOGOS
oDlgMensaje = $( "#mensajes" ).dialog({
 	autoOpen: false,
    height: 240,
    width: 350,
    modal: true // modal
});
oDlgFormuGestionPersona = $( "#formu_gestionPersona" ).dialog({
    autoOpen: false,
    height: 720,
    width: 700,
    modal: false,

    close: function() {
		formu_gestionPersona.reset();
    }
});
oDlgFormuGestionMatricula = $( "#formu_gestionMatricula" ).dialog({
    autoOpen: false,
    height: 650,
    width: 700,
    modal: false,

    close: function() {
		formu_gestionMatricula.reset();
    }
});
oDlgFormuGestionCoche = $( "#formu_gestionCoche" ).dialog({
    autoOpen: false,
    height: 460,
    width: 700,
    modal: false,

    close: function() {
		formu_gestionCoche.reset();
    }
});
oDlgFormuGestionClases = $( "#formu_gestionClases" ).dialog({
    autoOpen: false,
    height: 620,
    width: 700,
    modal: false,

    close: function() {
		formu_gestionClases.reset();
    }
});


//Eventos para mostrar  y ocultar formularios
window.addEventListener("load", ocultarFormularios);
document.getElementById("inicio").addEventListener("click", ocultarFormularios); 
// document.getElementById("btnAprobarPractico").addEventListener("click", mostrarAprobarPractico); 
// document.getElementById("btnMatricularCliente").addEventListener("click", mostrarMatricularCliente); 
// document.getElementById("btnAsignarProfesorAClase").addEventListener("click", mostrarAsignarProfesorAClase); 
// document.getElementById("btnListadoPersona").addEventListener("click", listadoPersona);
// document.getElementById("btnListadoMatricula").addEventListener("click", listadoMatriculas);
// document.getElementById("btnListadoClases").addEventListener("click", listadoClases);
// document.getElementById("btnListadoCoche").addEventListener("click", listadoCoche);

//Funciones que muestran los formularios
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


//Eventos para añadir, modificar, eliminar y mostrar datos del modelo
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////GESTION PERSONAS//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
document.formu_gestionPersona.añadir.addEventListener("click", altaPersona);
document.formu_gestionPersona.mod.addEventListener("click", modPersona);

//Funcion para dar de alta a una persona
function altaPersona(){
	var oForm = document.formu_gestionPersona;
	var bValido = true;
	var sErrores = "";

	// Campo dni
	var sDni = oForm.dniPersona.value.trim();
	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>DNI incorrecto  (Sintaxis: XXXXXXXX-A)";
		//Marcar error
		oForm.dniPersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.dniPersona.className = "form-control";
	}
	//Campo Nombre
	var sNombre = oForm.nombrePersona.value.trim();
	var oExpReg = /^[a-zA-Z\s]{2,40}$/;
	if (oExpReg.test(sNombre) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Nombre incorrecto (Sintaxis: 2-40 Digitos)";
		//Marcar error
		oForm.nombrePersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.nombrePersona.className = "form-control";	
	}
	// Campo apellidos
	var sApellidos = oForm.apellidoPersona.value.trim();
	oExpReg = /^[a-zA-Z\s]{3,40}$/;
	if (oExpReg.test(sApellidos) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Apellidos incorrecto (Sintaxis: 3-40 Digitos)";
		//Marcar error
		oForm.apellidoPersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.apellidoPersona.className = "form-control";	
	}
	// Campo direccion
	var sDireccion = oForm.direccionPersona.value.trim();
	oExpReg = /^[a-zA-Z\s]{10,40}$/; 
	if (oExpReg.test(sDireccion) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Direccion incorrecta (Sintaxis: 10-40 Digitos)";
		//Marcar error
		oForm.direccionPersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.direccionPersona.className = "form-control";	
	}
	// Campo email
	var sEmail = oForm.emailPersona.value.trim();
	oExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
	if (oExpReg.test(sEmail) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Email incorrecto (Sintaxis:  nombreusuario@servidor.dominio)";
		//Marcar error
		oForm.emailPersona.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.emailPersona.className = "form-control";	
	}
	// Campo tlf
	var sTlf = oForm.tlfPersona.value.trim();
	oExpReg = /^[0-9-]{9}$/;
	if (oExpReg.test(sTlf) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Telefono incorrecto (Sintaxis: 9 Digitos)";
		//Marcar error
		oForm.tlfPersona.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.tlfPersona.className = "form-control";	
	}

		
	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la persona a la base de datos
		var sTipo = oForm.persona.value.trim();
		var oPersona = { 
			dni: sDni,
			nombre: sNombre,
			apellidos: sApellidos,
			direccion: sDireccion,
			email: sEmail,
			telefono: sTlf,
			tipo: sTipo
		};
		sParametros = "datos=" + JSON.stringify(oPersona);

		$.post('php/personas/altaPersonas.php', sParametros, function(json) {
			if (json.error == false){
				toastr.success(json.resultado)
				oForm.reset();
				oDlgFormuGestionCoche.dialog("close");
			}else{
				toastr.error(json.resultado)
			}
		},'json');
	}else{
		toastr.error(sErrores);
	}
}

//Funcion para modificar los datos de una persona
function modPersona(){
	var oForm = document.formu_gestionPersona;
	var bValido = true;
	var sErrores = "";

	// Campo dni
	var sDni = oForm.dniPersona.value.trim();
	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>DNI incorrecto  (Sintaxis: XXXXXXXX-A)";
		//Marcar error
		oForm.dniPersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.dniPersona.className = "form-control";
	}
	//Campo Nombre
	var sNombre = oForm.nombrePersona.value.trim();
	var oExpReg = /^[a-zA-Z\s]{2,40}$/;
	if (oExpReg.test(sNombre) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Nombre incorrecto (Sintaxis: 2-40 Digitos)";
		//Marcar error
		oForm.nombrePersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.nombrePersona.className = "form-control";	
	}
	// Campo apellidos
	var sApellidos = oForm.apellidoPersona.value.trim();
	oExpReg = /^[a-zA-Z\s]{3,40}$/;
	if (oExpReg.test(sApellidos) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Apellidos incorrecto (Sintaxis: 3-40 Digitos)";
		//Marcar error
		oForm.apellidoPersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.apellidoPersona.className = "form-control";	
	}
	// Campo direccion
	var sDireccion = oForm.direccionPersona.value.trim();
	oExpReg = /^[a-zA-Z\s]{10,40}$/; 
	if (oExpReg.test(sDireccion) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Direccion incorrecta (Sintaxis: 10-40 Digitos)";
		//Marcar error
		oForm.direccionPersona.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.direccionPersona.className = "form-control";	
	}
	// Campo email
	var sEmail = oForm.emailPersona.value.trim();
	oExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
	if (oExpReg.test(sEmail) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Email incorrecto (Sintaxis:  nombreusuario@servidor.dominio)";
		//Marcar error
		oForm.emailPersona.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.emailPersona.className = "form-control";	
	}
	// Campo tlf
	var sTlf = oForm.tlfPersona.value.trim();
	oExpReg = /^[0-9-]{9}$/;
	if (oExpReg.test(sTlf) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Telefono incorrecto (Sintaxis: 9 Digitos)";
		//Marcar error
		oForm.tlfPersona.className = "form-control error";
	}else {
		//Desmarcar error
		oForm.tlfPersona.className = "form-control";	
	}

		
	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la persona a la base de datos
		var sTipo = oForm.persona.value.trim();
		var oPersona = { 
			dni: sDni,
			nombre: sNombre,
			apellidos: sApellidos,
			direccion: sDireccion,
			email: sEmail,
			telefono: sTlf,
			tipo: sTipo
		};
		sParametros = "datos=" + JSON.stringify(oPersona);

		$.get('php/personas/modPersonas.php', sParametros, function(json) {
			if (json.error == false){
				oForm.reset();
				toastr.success(json.resultado)
				oDlgFormuGestionPersona.dialog("close");
			}else{
				toastr.error(json.resultado)
			}
		},'json');
	}else{
		toastr.error(sErrores);
	}
}



//////////////////////////////////////////////////////////////////////////////////
////////////////////////////GESTION MATRICULAS////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
document.formu_gestionMatricula.añadir.addEventListener("click", altaMatricula);
document.formu_gestionMatricula.baja.addEventListener("click", bajaMatricula);
// document.formu_gestionMatricula.mod.addEventListener("click", modMatricula);
$("#fechaMatricula").datepicker();

//Funcion para dar de alta una matricula
function altaMatricula(){
	var oForm = document.formu_gestionMatricula;
	var bValido = true;
	var sErrores = "";

	//campo identificador matricula
	var sIdentificador = oForm.idMatricula.value.trim();
	oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Identificador de matricula incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.idMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.idMatricula.className = "form-control";
	}
	//campo cantidad abonada
	var sCantidad = oForm.cantidadAbonadaMatricula.value.trim();
	oExpReg = /^[+-]?\d+(\.\d+)?$/; 
	if (oExpReg.test(sCantidad) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Cantidad abonado incorrecta (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.cantidadAbonadaMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.cantidadAbonadaMatricula.className = "form-control";	
	}
	//campo fecha
	var sFecha = oForm.fechaMatricula.value.trim();
	if (sFecha == ""){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Fecha incorrecta (Debe seleccionar algun dia)";
		//Marcar error
		oForm.fechaMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.fechaMatricula.className = "form-control";	
	}
	//campo dni cliente
	var sDni = oForm.dniClienteMatricula.value.trim();
	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
	if (oExpReg.test(sDni) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>DNI de cliente incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.dniClienteMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.dniClienteMatricula.className = "form-control";
	}
	//campo precio
	var sPrecio = oForm.precioMatricula.value.trim();
	oExpReg = /^[+-]?\d+(\.\d+)?$/; 
	if (oExpReg.test(sPrecio) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Precio incorrecto (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.precioMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.precioMatricula.className = "form-control";	
	}
	
	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la matricula a la base de datos
		var oMatricula = { 
			id: sIdentificador,
			cantidad: sCantidad,
			fecha: sFecha,
			dniCli: sDni,
			precio: sPrecio
		};
		sParametros = "datos=" + JSON.stringify(oMatricula);

		$.ajax({
		    url: 'php/matriculas/altaMatricula.php',
		    type: 'POST',
		    dataType: 'json',
		    data: sParametros,
		    complete: function(oAjax){
		    	var oObjeto = JSON.parse(oAjax.responseText);
		    	if (oObjeto.error == false){
					oForm.reset();
					toastr.success(oObjeto.resultado)
					oDlgFormuGestionMatricula.dialog("close");
				}else{
					toastr.error(oObjeto.resultado)
				}
		    }
	    });
	}else{
		toastr.error(sErrores);
	}
}

//Funcion para dar de baja un matricula
function bajaMatricula(){
	var oForm = document.formu_gestionMatricula;

	// Campo indetificador
	var sIdentificador = oForm.idMatricula.value.trim();
	var oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		toastr.error("Matricula incorrecta  (Sintaxis:  1-10 numeros)");
		//Marcar error
		oForm.idMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.idMatricula.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar una matricula de la base de datos
		$.ajax({
		    url: 'php/matriculas/bajaMatricula.php',
		    type: 'POST',
		    dataType: 'json',
		    data: {id:sIdentificador},
		    complete: function(oAjax){
		    	var oObjeto = JSON.parse(oAjax.responseText);
		    	if (oObjeto.error == false){
					oForm.reset();
					toastr.success(oObjeto.resultado)
					oDlgFormuGestionMatricula.dialog("close");
				}else{
					toastr.error(oObjeto.resultado)
				}
		    }
	    });		
	}
}


//////////////////////////////////////////////////////////////////////////////////
////////////////////////////GESTION COCHES////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
document.formu_gestionCoche.añadir.addEventListener("click", altaCoche);
document.formu_gestionCoche.baja.addEventListener("click", bajaCoche);
document.formu_gestionCoche.mod.addEventListener("click", modCoche);

//Funcion para dar de alta un coche
function altaCoche(){
	var oForm = document.formu_gestionCoche;
	var bValido = true;
	var sErrores = "";	

	//Campo Marca
	var sMarca = oForm.marcaCoche.value.trim();
	var oExpReg = /^[a-zA-Z\s]{3,20}$/; 
	if (oExpReg.test(sMarca) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Marca incorrecta (Sintaxis: 3-20 Digitos)";
		//Marcar error
		oForm.marcaCoche.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.marcaCoche.className = "form-control";	
	}
	//Campo matricula
	var sMatricula = oForm.matriculaCoche.value.trim();
	oExpReg = /^[1-9]{4}\s[a-zA-Z]{3}/;
	if (oExpReg.test(sMatricula) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Matricula incorrecta (Sintaxis: XXXX AAA)";
		//Marcar error
		oForm.matriculaCoche.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.matriculaCoche.className = "form-control";	
	}
	//Campo modelo
	var sModelo = oForm.modeloCoche.value.trim();
	oExpReg = /^[a-zA-Z\s]{3,20}$/; 
	if (oExpReg.test(sModelo) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Modelo incorrecto (Sintaxis: 3-20 Digitos)";
		//Marcar error
		oForm.modeloCoche.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.modeloCoche.className = "form-control";	
	}

	//Comprobamos si el formulario es valido y añadimos el coche a la base de datos
	if (bValido) {
		var oCoche = { 
			marca : sMarca,
			matricula: sMatricula,
			modelo: sModelo
			};
		
		sURL = "php/coches/altaCoche.php";
		sParametros = "datos=" + JSON.stringify(oCoche);
		peticionAjax(sURL,sParametros);	
	}else{
		toastr.error(sErrores);
	}
}

//Funcion para dar de baja un coche
function bajaCoche(){
	var oForm = document.formu_gestionCoche;

	//Campo matricula
	var sMatricula = oForm.matriculaCoche.value.trim();
	var oExpReg = /^[1-9]{4}\s[a-zA-Z]{3}/;
	if (oExpReg.test(sMatricula) == false){
		toastr.error("Matricula incorrecta  (Sintaxis: XXXX AAA)");
		//Marcar error
		oForm.matriculaCoche.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.matriculaCoche.className = "form-control";
		//Aqui es donde se hacen los metodos para quitar un coche de la base de datos
		sURL = "php/coches/bajaCoche.php";
		sParametros = "matricula=" + sMatricula;
		//oAutoescuela.accionCoche(sURL,sParametros);
		peticionAjax(sURL,sParametros);
	}
}

//Funcion que modifica los datos de un coche
function modCoche(){
	var oForm = document.formu_gestionCoche;
	var bValido = true;
	var sErrores = "";	

	//Campo Marca
	var sMarca = oForm.marcaCoche.value.trim();
	var oExpReg = /^[a-zA-Z\s]{3,20}$/; 
	if (oExpReg.test(sMarca) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "Marca incorrecta (Sintaxis: 3-20 Digitos)";
		//Marcar error
		oForm.marcaCoche.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.marcaCoche.className = "form-control";	
	}
	//Campo matricula
	var sMatricula = oForm.matriculaCoche.value.trim();
	oExpReg = /^[1-9]{4}\s[a-zA-Z]{3}/;
	if (oExpReg.test(sMatricula) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Matricula incorrecta (Sintaxis: XXXX AAA)";
		//Marcar error
		oForm.matriculaCoche.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.matriculaCoche.className = "form-control";	
	}
	//Campo modelo
	var sModelo = oForm.modeloCoche.value.trim();
	oExpReg = /^[a-zA-Z\s]{3,20}$/; 
	if (oExpReg.test(sModelo) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Modelo incorrecto (Sintaxis: 3-20 Digitos)";
		//Marcar error
		oForm.modeloCoche.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.modeloCoche.className = "form-control";	
	}

	//Comprobamos si el formulario es valido y añadimos el coche a la base de datos
	if (bValido) {
		var oCoche = { 
			marca : sMarca,
			matricula: sMatricula,
			modelo: sModelo
			};
		
		sURL = "php/coches/modificarCoche.php";
		sParametros = "datos=" + JSON.stringify(oCoche);
		peticionAjax(sURL,sParametros);
	}else{
		toastr.error(sErrores);
	}
}

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////GESTION CLASES////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
document.formu_gestionClases.añadir.addEventListener("click", altaClase);
$("#fechaClase").datepicker();

//Funcion para dar de alta una clase
function altaClase(){
	var oForm = document.formu_gestionClases;
	var bValido = true;
	var sErrores = "";

	//Campo ID
	var sIdentificador = oForm.idClase.value.trim();
	var oExpReg = /^[0-9]{1,10}$/; 
	if (oExpReg.test(sIdentificador) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "Identificador incorrecto (Sintaxis:  1-10 numeros)";
		//Marcar error
		oForm.idClase.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.idClase.className = "form-control";
	}
	//Campo duración
	var sDuracion = oForm.duracionClase.value.trim();
	oExpReg = /^[0-9]{1,3}$/; 
	if (oExpReg.test(sDuracion) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Duracion incorrecta (Sintaxis: Del 1 al 999)";
		//Marcar error
		oForm.duracionClase.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.duracionClase.className = "form-control";
	}
	//campo fecha
	var dFecha = oForm.fechaClase.value;
	if (dFecha=="") {
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Fecha incorrecta";
		//Marcar error
		oForm.fechaClase.className = "form-control error";
	}else{
		oForm.fechaClase.className = "form-control";	
	}
	//Campo hora
	var sHora = oForm.horaClase.value.trim();
	oExpReg = /^[0-2][0-3]:[0-5][0-9]$/; 
	if (oExpReg.test(sHora) == false){
		if(bValido == true){
			bValido = false;	
		}
		sErrores += "<br>Hora incorrecta (Sintaxis: HH:MM)";
		//Marcar error
		oForm.horaClase.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.horaClase.className = "form-control";
	}
	
	//Campo tarifa
	var sTarifa = oForm.tarifaClase.value.trim();
	oExpReg = /^[+-]?\d+(\.\d+)?$/; 
	if (oExpReg.test(sTarifa) == false){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Tarifa incorrecta (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.tarifaClase.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.tarifaClase.className = "form-control";
	}

	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la clase a la base de datos
		
	}else{
		toastr.error(sErrores);
	}
}


var oAjax = null;
function inicializa_xhr() {
  if (window.XMLHttpRequest) {
	    return new XMLHttpRequest(); 
  } else if (window.ActiveXObject) {
	    return new ActiveXObject("Microsoft.XMLHTTP"); 
  } 
}

function peticionAjax(sURL,sParametros){

	// PRIMERO: configuracion de la peticion
	oAjax = inicializa_xhr();
	oAjax.open("POST",sURL,true);
	oAjax.addEventListener("readystatechange",procesarRespuesta,false);	
	oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	// SEGUNDO : hacer la peticion
	oAjax.send(sParametros);
	
}
    
function procesarRespuesta(){
	// TERCERO: procesar respuesta cuando llega
	if (oAjax.readyState == 4 && oAjax.status == 200){
		// JSON.parse cadena --> objeto
		// JSON.stringify objeto --> cadena
		 var oObjeto = JSON.parse(oAjax.responseText);
		 
		 switch(oObjeto.accion){
		 	case 100: // altaCoche
		 	case 200: // bajaCoche
		 	case 300: // modificarCoche
		 		if (oObjeto.error == false){
					toastr.success(oObjeto.resultado)
					oDlgFormuGestionCoche.dialog("close");
					oDlgFormuGestionCoche.reset();
				}else{
					toastr.error(oObjeto.resultado)
				}
				break;	
		 }
	}
}












































// document.formu_aprobarPractico.mod.addEventListener("click", frmAprobarPractico);
// document.formu_matricularCliente.mod.addEventListener("click", frmMatricularCliente);
// document.formu_asignarProfesor.mod.addEventListener("click", frmAsignarProfesorAClase);
// document.formu_busquedaAvanzadaPersona.buscar.addEventListener("click", listadoPersonaConValores);
// document.formu_busquedaAvanzadaMatricula.buscar.addEventListener("click", listadoMatriculaConValores);
// document.formu_busquedaAvanzadaClase.buscar.addEventListener("click", listadoClasesConValores);
// document.formu_busquedaAvanzadaCoche.buscar.addEventListener("click", listadoCocheConValores);
// // window.addEventListener("load", añadirDatos);




// //////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////MODIFICACIONES//////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

// function frmAprobarPractico(){
// 	var oForm = document.formu_aprobarPractico;

// 	//campo identificador matricula
// 	var sIdentificador = oForm.aprobarPracticoMatricula.value.trim();
// 	oExpReg = /^[0-9]{1,10}$/; 
// 	if (oExpReg.test(sIdentificador) == false){
// 		toastr.error("Identificador de matricula incorrecto (Sintaxis:  1-10 numeros)");
// 		//Marcar error
// 		oForm.aprobarPracticoMatricula.className = "form-control error";
// 	}else{
// 		//Desmarcar error
// 		oForm.aprobarPracticoMatricula.className = "form-control";
// 		var sMensaje = oAutoescuela.apruebaPractico(sIdentificador);
// 		oForm.reset();
// 		toastr.info(sMensaje);
// 	}
// }

// function frmMatricularCliente(){
// 	var oForm = document.formu_matricularCliente;
// 	var bValido = true;
// 	var sErrores = "";

// 	//campo dni cliente
// 	var sDni = oForm.matricularClienteDni.value.trim();
// 	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
// 	if (oExpReg.test(sDni) == false){
// 		if(bValido == true){
// 			bValido = false;	
// 		}
// 		sErrores += "DNI de cliente incorrecto (Sintaxis:  1-10 numeros)";
// 		//Marcar error
// 		oForm.matricularClienteDni.className = "form-control error";
// 	}else{
// 		//Desmarcar error
// 		oForm.matricularClienteDni.className = "form-control";
// 	}
// 	//Campo ID
// 	var sIdentificador = oForm.matricularClienteId.value.trim();
// 	var oExpReg = /^[0-9]{1,10}$/; 
// 	if (oExpReg.test(sIdentificador) == false){
// 		if(bValido == true){
// 			bValido = false;	
// 		}
// 		sErrores += "<br>Identificador incorrecto (Sintaxis:  1-10 numeros)";
// 		//Marcar error
// 		oForm.matricularClienteId.className = "form-control error";
// 	}else{
// 		//Desmarcar error
// 		oForm.matricularClienteId.className = "form-control";
// 	}

// 	//Comprobamos si el formulario es valido y matriculamos cliente
// 	if (bValido) {
// 		//Aquí es donde se hacen los metodos para matricular al cliente
// 		var sMensaje = oAutoescuela.matricularClienteEnClases(sDni, sIdentificador);
// 		oForm.reset();
// 		toastr.info(sMensaje);
// 	}else{
// 		toastr.error(sErrores);
// 	}
// }

// function frmAsignarProfesorAClase(){
// 	var oForm = document.formu_asignarProfesor;
// 	var bValido = true;
// 	var sErrores = "";

// 	//campo dni cliente
// 	var sDni = oForm.asignarProfDni.value.trim();
// 	oExpReg = /^[0-9]{8}\-[a-zA-Z]{1}$/;
// 	if (oExpReg.test(sDni) == false){
// 		if(bValido == true){
// 			bValido = false;	
// 		}
// 		sErrores += "DNI de cliente incorrecto (Sintaxis:  1-10 numeros)";
// 		//Marcar error
// 		oForm.asignarProfDni.className = "form-control error";
// 	}else{
// 		//Desmarcar error
// 		oForm.asignarProfDni.className = "form-control";
// 	}
// 	//Campo ID
// 	var sIdentificador = oForm.asignarProfId.value.trim();
// 	var oExpReg = /^[0-9]{1,10}$/; 
// 	if (oExpReg.test(sIdentificador) == false){
// 		if(bValido == true){
// 			bValido = false;	
// 		}
// 		sErrores += "<br>Identificador incorrecto (Sintaxis:  1-10 numeros)";
// 		//Marcar error
// 		oForm.asignarProfId.className = "form-control error";
// 	}else{
// 		//Desmarcar error
// 		oForm.asignarProfId.className = "form-control";
// 	}

// 	//Comprobamos si el formulario es valido y matriculamos cliente
// 	if (bValido) {
// 		//Aquí es donde se hacen los metodos para matricular al cliente
// 		var sMensaje = oAutoescuela.AsignarProfesorAClases(sDni, sIdentificador);
// 		oForm.reset();
// 		toastr.info(sMensaje);
// 	}else{
// 		toastr.error(sErrores);
// 	}
// }


// //////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////LISTADOS/////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// var cont = 0;
// function listadoPersona(){
// 	ocultarFormularios();
// 	document.formu_busquedaAvanzadaPersona.style.display = "block";
// 	document.formu_busquedaAvanzadaPersona.reset();
// 	listadoPersonaAvanzados("","");	
// }
// function listadoPersonaConValores(){
// 	var oForm = document.formu_busquedaAvanzadaPersona;
// 	var sClave = oForm.busquedaPersonaClave.value.trim();
// 	var sValor = oForm.busquedaPersonaValor.value.trim();

// 	if (sClave == "Seleccione clave") {
// 		listadoPersonaAvanzados("", "");	
// 	}else{
// 		listadoPersonaAvanzados(sClave, sValor);	
// 	}
// 	oForm.reset();
// }
// function listadoPersonaAvanzados(clave, valor){
// 	var oCapa = document.getElementById("capa");
// 	oCapa.style.display = "block";
// 	if(cont > 0){
// 		oCapa.removeChild(oCapa.childNodes[0]);
// 	}
// 	oCapa.appendChild(oAutoescuela.ListadoPersonas(clave, valor));
// 	cont++;
// }




// function listadoMatriculas(){
// 	ocultarFormularios();
// 	document.formu_busquedaAvanzadaMatricula.style.display = "block";
// 	document.formu_busquedaAvanzadaMatricula.reset();
// 	listadoMatriculaAvanzados("","");		
// }
// function listadoMatriculaConValores(){
// 	var oForm = document.formu_busquedaAvanzadaMatricula;
// 	var sClave = oForm.busquedaMatriculaClave.value.trim();
// 	var sValor = oForm.busquedaMatriculaValor.value.trim();

// 	if(sClave == "Examen Teorico aprobado" || sClave == "Examen Practico aprobado"){
// 		sValor = sValor.toUpperCase();
// 	}
	
// 	if (sClave == "Seleccione clave") {
// 		listadoMatriculaAvanzados("", "");	
// 	}else{
// 		listadoMatriculaAvanzados(sClave, sValor);
// 	}
// 	oForm.reset();
// }
// function listadoMatriculaAvanzados(clave, valor){
// 	var oCapa = document.getElementById("capa");
// 	oCapa.style.display = "block";
// 	if(cont > 0){
// 		oCapa.removeChild(oCapa.childNodes[0]);
// 	}
// 	oCapa.appendChild(oAutoescuela.ListadoMatriculas(clave, valor));
// 	cont++;
// }




// function listadoClases(){
// 	ocultarFormularios();
// 	document.formu_busquedaAvanzadaClase.style.display = "block";
// 	document.formu_busquedaAvanzadaClase.reset();
// 	listadoClasesAvanzados("","");
// }
// function listadoClasesConValores(){
// 	var oForm = document.formu_busquedaAvanzadaClase;
// 	var sClave = oForm.busquedaClaseClave.value.trim();
// 	var sValor = oForm.busquedaClaseValor.value.trim();

// 	if (sClave == "Seleccione clave") {
// 		listadoClasesAvanzados("", "");	
// 	}else{
// 		listadoClasesAvanzados(sClave, sValor);
// 	}
// 	oForm.reset();
// }
// function listadoClasesAvanzados(clave, valor){
// 	var oCapa = document.getElementById("capa");
// 	oCapa.style.display = "block";
// 	if(cont > 0){
// 		oCapa.removeChild(oCapa.childNodes[0]);
// 	}
// 	oCapa.appendChild(oAutoescuela.listadoClases(clave,valor));
// 	cont++;
// }




// function listadoCoche(){
// 	ocultarFormularios();
// 	document.formu_busquedaAvanzadaCoche.style.display = "block";
// 	document.formu_busquedaAvanzadaCoche.reset();
// 	listadoCocheAvanzados("","");
// }
// function listadoCocheConValores(){
// 	var oForm = document.formu_busquedaAvanzadaCoche;

// 	var sClave = oForm.busquedaCocheClave.value.trim();
// 	var sValor = oForm.busquedaCocheValor.value.trim();

// 	if (sClave == "Seleccione clave") {
// 		listadoCocheAvanzados("", "");	
// 	}else{
// 		listadoCocheAvanzados(sClave, sValor);
// 	}
// 	oForm.reset();
// }
// function listadoCocheAvanzados(clave, valor){
// 	var oCapa = document.getElementById("capa");
// 	oCapa.style.display = "block";
// 	if(cont > 0){
// 		oCapa.removeChild(oCapa.childNodes[0]);
// 	}
// 	oCapa.appendChild(oAutoescuela.ListadoCoches(clave, valor));
// 	cont++;
// }