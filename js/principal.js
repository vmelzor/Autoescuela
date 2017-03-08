//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////FORMULARIOS///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#cabesa").load("cabecera.html");
$.getScript("js/eventosCabecera.js");


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
    height: 850,
    width: 700,
    modal: false,

    close: function() {
		formu_gestionClases.reset();
    }
});
oDlgFormuAprobarTeorico = $( "#formu_aprobarTeorico" ).dialog({
    autoOpen: false,
    height: 350,
    width: 700,
    modal: false,

    close: function() {
		formu_aprobarTeorico.reset();
    }
});
oDlgFormuAprobarPractico = $( "#formu_aprobarPractico" ).dialog({
    autoOpen: false,
    height: 350,
    width: 700,
    modal: false,

    close: function() {
		formu_aprobarPractico.reset();
    }
});
oDlgFormuMatricularCliente = $( "#formu_matricularCliente" ).dialog({
    autoOpen: false,
    height: 400,
    width: 700,
    modal: false,

    close: function() {
		formu_matricularCliente.reset();
    }
});
oDlgFormuAsignarProfesor = $( "#formu_asignarProfesor" ).dialog({
    autoOpen: false,
    height: 400,
    width: 700,
    modal: false,

    close: function() {
		formu_asignarProfesor.reset();
    }
});

window.addEventListener("load", cargarFormularios);

function cargarFormularios(){
	var divForm = $("<div id='capaFormulariosBusquedas'></div>");
	divForm.append($( "#formu_busquedaAvanzadaPersona" ));
	divForm.append($( "#formu_busquedaAvanzadaMatricula" ));
	divForm.append($( "#formu_busquedaAvanzadaClase" ));
	divForm.append($( "#formu_busquedaAvanzadaCoche" ));
	$(".container").append(divForm);
	ocultarFormularios();
}

function ocultarFormularios(){
	document.formu_busquedaAvanzadaPersona.style.display = "none";
	document.formu_busquedaAvanzadaMatricula.style.display = "none";
	document.formu_busquedaAvanzadaClase.style.display = "none";
	document.formu_busquedaAvanzadaCoche.style.display = "none";
}


//Eventos para añadir, modificar, eliminar y mostrar datos del modelo
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////GESTION PERSONAS//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// document.formu_gestionPersona.añadir.addEventListener("click", altaPersona);
// document.formu_gestionPersona.mod.addEventListener("click", modPersona);

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
		sErrores += "DNI incorrecto  (Sintaxis: XXXXXXXX-A)";
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
		sErrores += "<br>Nombre incorrecto (Sintaxis: 2-40 Digitos)";
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
				oDlgFormuGestionPersona.dialog("close");
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
		sErrores += "DNI incorrecto  (Sintaxis: XXXXXXXX-A)";
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
		sErrores += "<br>Nombre incorrecto (Sintaxis: 2-40 Digitos)";
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
// document.formu_gestionMatricula.añadir.addEventListener("click", altaMatricula);
// document.formu_gestionMatricula.baja.addEventListener("click", bajaMatricula);

$("#fechaMatricula").datepicker({dateFormat: 'yy-mm-dd'}).val();

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
		sErrores += "Identificador de matricula incorrecto (Sintaxis:  1-10 numeros)";
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
		sErrores += "<br>Cantidad abonado incorrecta (Sintaxis: Numeros enteros o decimales(con .))";
		//Marcar error
		oForm.cantidadAbonadaMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.cantidadAbonadaMatricula.className = "form-control";	
	}
	//campo fecha
	var sFecha = oForm.fechaMatricula.value;
	if (sFecha == ""){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Fecha incorrecta (Debe seleccionar algun dia)";
		//Marcar error
		oForm.fechaMatricula.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.fechaMatricula.className = "form-control";	
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
	//campo dni cliente
	var sDni = $("#clienteMatricula").val();
	if (sDni == "Seleccione un cliente"){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Debe seleccionar un cliente";
		//Marcar error
		$("#clienteMatricula").addClass('error');
	}else{
		//Desmarcar error
		$("#clienteMatricula").removeClass('error');
	}
	
	if (bValido) {
		$.ajax({
		    url: 'php/matriculas/altaMatricula.php',
		    type: 'POST',
		    dataType: 'json',
		    data: $("#formu_gestionMatricula").serialize(),
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
/*
<label>Matrícula</label>
<input type="text" class="form-control" name="matriculaCoche" placeholder="Matrícula del Coche">
<br>
<label>Marca</label>
<input type="text" class="form-control" name="marcaCoche" placeholder="Marca del Coche">
<br>
<label>Modelo</label>
<input type="text" class="form-control" name="modeloCoche" placeholder="Modelo del Coche">
*/

//funcion que crea el formulario dinamicamente
function cargarFormularioDinamicamente(){
	var oCapa = $("#capaFormuDinamico");
	
	//label
	var oLabel = document.createElement("label");
	var oTexto = document.createTextNode("Matrícula");
	oLabel.appendChild(oTexto);
	oCapa.append(oLabel);
	// Input
	var oInput = document.createElement("input");
	oInput.setAttribute("type", "text");
	oInput.setAttribute("class", "form-control");
	oInput.setAttribute("name", "matriculaCoche");
	oInput.setAttribute("placeholder", "Matrícula del Coche");
	oCapa.append(oInput);
	oCapa.append("<br>");	

	//label
	oLabel = document.createElement("label");
	oTexto = document.createTextNode("Marca");
	oLabel.appendChild(oTexto);
	oCapa.append(oLabel);
	// Input
	oInput = document.createElement("input");
	oInput.setAttribute("type", "text");
	oInput.setAttribute("class", "form-control");
	oInput.setAttribute("name", "marcaCoche");
	oInput.setAttribute("placeholder", "Marca del Coche");
	oCapa.append(oInput);
	oCapa.append("<br>");	

	//label
	oLabel = document.createElement("label");
	oTexto = document.createTextNode("Modelo");
	oLabel.appendChild(oTexto);
	oCapa.append(oLabel);
	// Input
	oInput = document.createElement("input");
	oInput.setAttribute("type", "text");
	oInput.setAttribute("class", "form-control");
	oInput.setAttribute("name", "modeloCoche");
	oInput.setAttribute("placeholder", "Modelo del Coche");
	oCapa.append(oInput);
}








// document.formu_gestionCoche.añadir.addEventListener("click", altaCoche);
// document.formu_gestionCoche.baja.addEventListener("click", bajaCoche);
// document.formu_gestionCoche.mod.addEventListener("click", modCoche);

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
// document.formu_gestionClases.añadir.addEventListener("click", altaClase);
$("#fechaClase").datepicker({dateFormat: 'yy-mm-dd'}).val();

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
	oExpReg = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; 
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
	//campo fecha
	var sFecha = oForm.fechaClase.value.trim();
	if (sFecha == ""){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Fecha incorrecta (Debe seleccionar algun dia)";
		//Marcar error
		oForm.fechaClase.className = "form-control error";
	}else{
		//Desmarcar error
		oForm.fechaClase.className = "form-control";	
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
	//campo matricula coche
	var sMatricula = $("#cocheClase").val();
	if (sMatricula == "Seleccione un coche"){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Debe seleccionar un coche";
		//Marcar error
		$("#cocheClase").addClass('error');
	}else{
		//Desmarcar error
		$("#cocheClase").removeClass('error');
	}
	//campo dni profesor
	var sDniProf = $("#profesorClase").val();
	if (sDniProf == "Seleccione un profesor"){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Debe seleccionar un profesor";
		//Marcar error
		$("#profesorClase").addClass('error');
	}else{
		//Desmarcar error
		$("#profesorClase").removeClass('error');
	}
	//campo dni cliente
	var sDniCli = $("#clienteClase").val();
	if (sDniCli == "Seleccione un cliente"){
		if(bValido == true){
			bValido = false;		
		}
		sErrores += "<br>Debe seleccionar un cliente";
		//Marcar error
		$("#clienteClase").addClass('error');
	}else{
		//Desmarcar error
		$("#clienteClase").removeClass('error');
	}


	if (bValido) {
		//Aquí es donde se hacen los metodos para añadir la clase a la base de datos
		var oClase = { 
			id : sIdentificador,
			duracion: sDuracion,
			hora: sHora,
			fecha: sFecha,
			tarifa: sTarifa,
			matricula: sMatricula,
			dniProf: sDniProf,
			dniCli: sDniCli
		};
		var sParametros = "datos=" + JSON.stringify(oClase);

		$.post('php/clases/altaClase.php', sParametros ,function(oObjeto) {
		    if (oObjeto.error == false){
				oForm.reset();
				toastr.success(oObjeto.resultado)
				oDlgFormuGestionClases.dialog("close");
			}else{
				toastr.error(oObjeto.resultado)
			}
		},'json');

	}else{
		toastr.error(sErrores);
	}
}




//////////////////////////////////////////////////////////////////////////////////
////////////////////////////APROBAR TEÓRICO///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
oForm = document.formu_aprobarTeorico;
// oForm.mod.addEventListener("click", aprobarTeorico);

function aprobarTeorico(){
	var valor = $("#matriculaTeorico").val();
	if (valor == "Seleccione una matrícula"){
		toastr.error("Debe seleccionar una matrícula");
		$("#matriculaTeorico").addClass('error');
	}else{
		$("#matriculaTeorico").removeClass('error');

		$.ajax({
		    url: 'php/modificaciones/aprobarTeorico.php',
		    type: 'POST',
		    dataType: 'json',
		    data: {id:valor},
		    complete: function(oAjax){
		    	var oObjeto = JSON.parse(oAjax.responseText);
		    	if (oObjeto.error == false){
					oForm.reset();
					toastr.success(oObjeto.resultado)
					oDlgFormuAprobarTeorico.dialog("close");
				}else{
					toastr.error(oObjeto.resultado)
				}
		    }
	    });	
	}
}



//////////////////////////////////////////////////////////////////////////////////
////////////////////////////APROBAR PRÁCTICO//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
oForm = document.formu_aprobarPractico;
// oForm.mod.addEventListener("click", aprobarPractico);

function aprobarPractico(){
	var valor = $("#matriculaPractico").val();
	if (valor == "Seleccione una matrícula"){
		toastr.error("Debe seleccionar una matrícula");
		$("#matriculaPractico").addClass('error');
	}else{
		$("#matriculaPractico").removeClass('error');

		$.ajax({
		    url: 'php/modificaciones/aprobarPractico.php',
		    type: 'POST',
		    dataType: 'json',
		    data: {id:valor},
		    complete: function(oAjax){
		    	var oObjeto = JSON.parse(oAjax.responseText);
		    	if (oObjeto.error == false){
					oForm.reset();
					toastr.success(oObjeto.resultado)
					oDlgFormuAprobarPractico.dialog("close");
				}else{
					toastr.error(oObjeto.resultado)
				}
		    }
	    });	
	}
}




//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////CREACIÓN DE COMBOS/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function cargarComboGestionMatricula(){
	//Borro el combo creado anteriormente 
	$("#clienteMatricula").remove();

	// Creamos el select de clientes del formulario Gestión de matriculas
	$.post('php/selects/selectClientes.php', function(json) {
		var oClientes = json.arrayClientes;
		var oSelect = document.createElement("SELECT");
		oSelect.setAttribute("id", "clienteMatricula");
		oSelect.setAttribute("name", "clienteMatricula");
		oSelect.className="form-control";

		var oOption = document.createElement("option");
		var oTexto = document.createTextNode("Seleccione un cliente");
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

		for (var i=0; i<oClientes.length; i++) {
		    var oOption = document.createElement("option");
		    var oTexto = document.createTextNode(oClientes[i]['DNI']);
		    oOption.appendChild(oTexto);
		    oSelect.appendChild(oOption);
		}
		$("#comboClientesMatricula").append(oSelect);
	},'json');
}

function cargarComboGestionClases(){
	//Borramos los combos antes de crearlos otra vez
	$("#cocheClase").remove();
	$("#profesorClase").remove();
	$("#clienteClase").remove();

	// Creamos el select de coches del formulario Gestión de clases
	$.post('php/selects/selectCoches.php', function(json) {
		var oCoches = json.arrayCoches;
		var oSelect = document.createElement("SELECT");
		oSelect.setAttribute("id", "cocheClase");
		oSelect.className="form-control";

		var oOption = document.createElement("option");
		var oTexto = document.createTextNode("Seleccione un coche");
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

		for (var i=0; i<oCoches.length; i++) {
		    var oOption = document.createElement("option");
		    var oTexto = document.createTextNode(oCoches[i]['MATRICULA']);
		    oOption.appendChild(oTexto);
		    oSelect.appendChild(oOption);
		}
		$("#comboCoches").append(oSelect);
	},'json');

	// Creamos el select de profesores del formulario Gestión de clases
	$.post('php/selects/selectProfesores.php', function(json) {
		var oProfesores = json.arrayProfesores;
		var oSelect = document.createElement("SELECT");
		oSelect.setAttribute("id", "profesorClase");
		oSelect.className="form-control";

		var oOption = document.createElement("option");
		var oTexto = document.createTextNode("Seleccione un profesor");
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

		for (var i=0; i<oProfesores.length; i++) {
		    var oOption = document.createElement("option");
		    var oTexto = document.createTextNode(oProfesores[i]['DNI']);
		    oOption.appendChild(oTexto);
		    oSelect.appendChild(oOption);
		}
		$("#comboProfesoresClase").append(oSelect);
	},'json');

	// Creamos el select de clientes del formulario Gestión de clases
	$.post('php/selects/selectClientes.php', function(json) {
		var oClientes = json.arrayClientes;
		var oSelect = document.createElement("SELECT");
		oSelect.setAttribute("id", "clienteClase");
		oSelect.className="form-control";

		var oOption = document.createElement("option");
		var oTexto = document.createTextNode("Seleccione un cliente");
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

		for (var i=0; i<oClientes.length; i++) {
		    var oOption = document.createElement("option");
		    var oTexto = document.createTextNode(oClientes[i]['DNI']);
		    oOption.appendChild(oTexto);
		    oSelect.appendChild(oOption);
		}
		$("#comboClientesClase").append(oSelect);
	},'json');
}

function cargarComboMatriculasTeorico(){
	//Borro el combo creado anteriormente 
	$("#matriculaTeorico").remove();

	// Creamos el select de clientes del formulario Gestión de matriculas
	$.post('php/selects/selectMatriculas.php', function(json) {
		var oMatriculas = json.arrayMatriculas;
		var oSelect = document.createElement("SELECT");
		oSelect.setAttribute("id", "matriculaTeorico");
		oSelect.setAttribute("name", "matriculaTeorico");
		oSelect.className="form-control";

		var oOption = document.createElement("option");
		var oTexto = document.createTextNode("Seleccione una matrícula");
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

		for (var i=0; i<oMatriculas.length; i++) {
		    var oOption = document.createElement("option");
		    var oTexto = document.createTextNode(oMatriculas[i]['ID_MATRICULA']);
		    oOption.appendChild(oTexto);
		    oSelect.appendChild(oOption);
		}
		$("#comboMatriculasTeorico").append(oSelect);
	},'json');
}

function cargarComboMatriculasPractico(){
	//Borro el combo creado anteriormente 
	$("#matriculaPractico").remove();

	// Creamos el select de clientes del formulario Gestión de matriculas
	$.post('php/selects/selectMatriculas.php', function(json) {
		var oMatriculas = json.arrayMatriculas;
		var oSelect = document.createElement("SELECT");
		oSelect.setAttribute("id", "matriculaPractico");
		oSelect.setAttribute("name", "matriculaPractico");
		oSelect.className="form-control";

		var oOption = document.createElement("option");
		var oTexto = document.createTextNode("Seleccione una matrícula");
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

		for (var i=0; i<oMatriculas.length; i++) {
		    var oOption = document.createElement("option");
		    var oTexto = document.createTextNode(oMatriculas[i]['ID_MATRICULA']);
		    oOption.appendChild(oTexto);
		    oSelect.appendChild(oOption);
		}
		$("#comboMatriculasPractico").append(oSelect);
	},'json');
}




//Funciones para ejecutar funciones ajax sin jquery
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




//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////LISTADOS////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

var tipo;
function listadoPersona(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaPersona.style.display = "block";
 	document.formu_busquedaAvanzadaPersona.reset();
	tipo = "HTML";
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

function listadoMatriculas(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaMatricula.style.display = "block";
 	document.formu_busquedaAvanzadaMatricula.reset();
	tipo = "JSON";
 	listadoMatriculasAvanzados("","");
}
 
function listadoMatriculaConValores(){
 	var oForm = document.formu_busquedaAvanzadaMatricula;

 	var sClave = oForm.busquedaMatriculaClave.value.trim();
	
 	var sValor = oForm.busquedaMatriculaValor.value.trim();

 	if (sClave == "Seleccione clave") {
 		listadoMatriculasAvanzados("", "");	
 	}else{
		listadoMatriculasAvanzados(sClave, sValor);
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

function listadoClases(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaClase.style.display = "block";
 	document.formu_busquedaAvanzadaClase.reset();
	tipo = "JSON";
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

function listadoCoche(){
	ocultarFormularios();
 	document.formu_busquedaAvanzadaCoche.style.display = "block";
 	document.formu_busquedaAvanzadaCoche.reset();
	tipo = "XML";
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
		var salida='';
		var datos = null;
		var titulo = "";
		var bOk = true;
		if(tipo == "JSON"){
			//console.log(conexion1.responseText);
			datos=JSON.parse(conexion1.responseText);
			titulo = datos["mensaje"];
			if(datos["resultado"].length == 0){
				salida += "<h2>Sin resultados<h2>";
				bOk=false;
			}
		}
		else if(tipo == "XML"){
			datos=conexion1.responseXML;
			
			titulo = "Listado de coches";
			if(datos == null){
				salida += "<h2>Sin resultados<h2>";
				bOk=false;
			}
			else{
				var oCoches = datos.getElementsByTagName("coche");
				if(oCoches.length <= 0){
					salida += "<h2>Sin resultados<h2>";
					bOk=false;
				}
			}
		}
		else{
			datos=conexion1.responseText;
			titulo = "Listado de personas";
			bOk=false;
			if(datos == null){
				salida += "<h2>Sin resultados<h2>";
			}
			else{
				salida = "<h2>"+titulo+"<h2>";
				salida += datos;
			}
		}
		
		if(bOk){
			salida = "<h2>"+titulo+"<h2>";
			salida += "<table border='1' class='table small'>";
		
			salida += "<tr>";
			
			if(tipo == "JSON"){
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
			}
			else if(tipo == "XML"){
				var oCoches = datos.getElementsByTagName("coche");
				salida += '<tr><th>MATRICULA</th><th>MARCA</th><th>MODELO</th></tr>';
				for(var i=0;i<oCoches.length;i++){
					salida +='<tr>';
					salida +='<td>'+oCoches[i].getElementsByTagName('matricula')[0].textContent+'</td>';
					salida +='<td>'+oCoches[i].getElementsByTagName('marca')[0].textContent+'</td>';
					salida +='<td>'+oCoches[i].getElementsByTagName('modelo')[0].textContent+'</td></tr>';
				}
			}
			salida += "</table>";
		}
		
		//detalles.innerHTML = salida;
		$(".container").remove("#capa");
		var capa = $("#capa").addClass("table-responsive").css("display","block").html(salida);
		$(".container").append(capa);
		} 
	else {
		$(".container").remove("#capa");
		var capa = $("#capa").addClass("table-responsive").css("display","block").text('Cargando...');
		$(".container").append(capa);
		//detalles.innerHTML = 'Cargando...';
	}
}



//document.getElementById("btnListadoClases").addEventListener("click", listadoClases);
//document.formu_busquedaAvanzadaClase.buscar.addEventListener("click", listadoClasesConValores);
