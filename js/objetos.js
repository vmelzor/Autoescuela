function Persona(sApellidos,sDireccion, sDNI, sEmail, sNombre, iTelefono){
	this.Apellidos = sApellidos;
	this.Direccion = sDireccion;
	this.DNI = sDNI;
	this.Email = sEmail;
	this.Nombre = sNombre;
	this.Telefono = iTelefono;
}

Persona.prototype.toHTMLRow = function (){
	//creamos la fila
	var fila = document.createElement("tr");
	//creamos la celda DNI y la introducimos en la fila
	var celda = document.createElement("td");
	var textoCelda = document.createTextNode(this.DNI);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Nombre y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Nombre);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Apellidos y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Apellidos);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Telefono y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Telefono);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Direccion y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Direccion);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Email y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Email);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	return fila;
}

function Profesor(sApellidos,sDireccion, sDNI, sEmail, sNombre, iTelefono, iID){
	Persona.call(this, sApellidos,sDireccion,sDNI,sEmail,sNombre,iTelefono);
	this.ID = iID;
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.toHTMLRow = function (){
	//creamos la fila
	var fila = document.createElement("tr");
	//creamos la celda DNI y la introducimos en la fila
	var celda = document.createElement("td");
	var textoCelda = document.createTextNode(this.DNI);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Nombre y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Nombre);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Apellidos y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Apellidos);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Telefono y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Telefono);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Direccion y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Direccion);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Email y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Email);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    //creamos la celda ID y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.ID);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	return fila;
}

function Cliente(sApellidos,sDireccion, sDNI, sEmail, sNombre, iTelefono, iID){
	Persona.call(this, sApellidos,sDireccion,sDNI,sEmail,sNombre,iTelefono);
	this.ID = iID;
}

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.toHTMLRow = function (){
	//creamos la fila
	var fila = document.createElement("tr");
	//creamos la celda DNI y la introducimos en la fila
	var celda = document.createElement("td");
	var textoCelda = document.createTextNode(this.DNI);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Nombre y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Nombre);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Apellidos y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Apellidos);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Telefono y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Telefono);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Direccion y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Direccion);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Email y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Email);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    //creamos la celda ID y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.ID);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	return fila;
}

function Coche(sMarca, sMatricula, sModelo){
	this.Marca = sMarca;
	this.Matricula = sMatricula;
	this.Modelo = sModelo;
}

Coche.prototype.toHTMLRow = function (){
	//creamos la fila
	var fila = document.createElement("tr");
	//creamos la celda Marca y la introducimos en la fila
	var celda = document.createElement("td");
	var textoCelda = document.createTextNode(this.Marca);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Matricula y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Matricula);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Modelo y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Modelo);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	return fila;
}

function Clases (iId, fDuracion, dFecha, sHora){
	this.ID = iId;
	this.Duracion = fDuracion;
	this.Fecha = dFecha;
	this.Hora = sHora;
	this.Profesor = null;
	this.Clientes = [];
}

Clases.prototype.toHTMLRow = function (){
	var subTabla   = document.createElement("table");
	subTabla.setAttribute("border","1");
	var tblBody = document.createElement("tbody");
	var fila = document.createElement("tr");
	var celda = document.createElement("th");
	var textoCelda = document.createTextNode("DNI");
	celda.appendChild(textoCelda);
	fila.appendChild(celda);
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Nombre");
	celda.appendChild(textoCelda);
	fila.appendChild(celda);
	tblBody.appendChild(fila);
	for(var i = 0; i < this.Clientes.length; i++){
		fila = document.createElement("tr");
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Clientes[i].DNI);
		celda.appendChild(textoCelda);
		fila.appendChild(celda);
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Clientes[i].Nombre);
		celda.appendChild(textoCelda);
		fila.appendChild(celda);
		tblBody.appendChild(fila);
	}
	subTabla.appendChild(tblBody);
	
	//creamos la fila
	fila = document.createElement("tr");
	//creamos la celda ID y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.ID);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Duracion y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Duracion);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Fecha y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Fecha);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Hora y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Hora);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	if(this.Profesor != null){
	    //creamos la celda Profesor.DNI y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Profesor.DNI);
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
		//creamos la celda Profesor.Nombre y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Profesor.Nombre);
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	else{
		//creamos la celda Profesor.DNI y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
		//creamos la celda Profesor.Nombre y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	if(this.Clientes.length > 0){
		//creamos la celda Clientes y la introducimos en la fila
		celda = document.createElement("td");
	    celda.appendChild(subTabla);
	    fila.appendChild(celda);
	}
	else{
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	return fila;
}

function Teoricas(iId, fDuracion, dFecha, sHora, iAforo){
	Clases.call(this, iId,fDuracion,dFecha,sHora);
	this.Aforo = iAforo;
}

Teoricas.prototype = Object.create(Clases.prototype);
Teoricas.prototype.constructor = Teoricas;

Teoricas.prototype.toHTMLRow = function (){
	var subTabla   = document.createElement("table");
	subTabla.setAttribute("border","1");
	var tblBody = document.createElement("tbody");
	var fila = document.createElement("tr");
	var celda = document.createElement("th");
	var textoCelda = document.createTextNode("DNI");
	celda.appendChild(textoCelda);
	fila.appendChild(celda);
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Nombre");
	celda.appendChild(textoCelda);
	fila.appendChild(celda);
	tblBody.appendChild(fila);
	for(var i = 0; i < this.Clientes.length; i++){
		fila = document.createElement("tr");
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Clientes[i].DNI);
		celda.appendChild(textoCelda);
		fila.appendChild(celda);
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Clientes[i].Nombre);
		celda.appendChild(textoCelda);
		fila.appendChild(celda);
		tblBody.appendChild(fila);
	}
	subTabla.appendChild(tblBody);
	//creamos la fila
	fila = document.createElement("tr");
	//creamos la celda ID y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.ID);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Duracion y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Duracion);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Fecha y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Fecha);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Hora y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Hora);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Aforo y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Aforo);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    if(this.Profesor != null){
	    //creamos la celda Profesor.DNI y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Profesor.DNI);
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
		//creamos la celda Profesor.Nombre y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Profesor.Nombre);
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	else{
		//creamos la celda Profesor.DNI y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
		//creamos la celda Profesor.Nombre y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	if(this.Clientes.length > 0){
		//creamos la celda Clientes y la introducimos en la fila
		celda = document.createElement("td");
	    celda.appendChild(subTabla);
	    fila.appendChild(celda);
	}
	else{
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	return fila;
}

function Practicas(iId, fDuracion, dFecha, sHora, fTarifaHora){
	Clases.call(this, iId,fDuracion,dFecha,sHora);
	this.TarifaHora = fTarifaHora;
}

Practicas.prototype = Object.create(Clases.prototype);
Practicas.prototype.constructor = Practicas;

Practicas.prototype.toHTMLRow = function (){
	var subTabla   = document.createElement("table");
	subTabla.setAttribute("border","1");
	var tblBody = document.createElement("tbody");
	var fila = document.createElement("tr");
	var celda = document.createElement("th");
	var textoCelda = document.createTextNode("DNI");
	celda.appendChild(textoCelda);
	fila.appendChild(celda);
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Nombre");
	celda.appendChild(textoCelda);
	fila.appendChild(celda);
	tblBody.appendChild(fila);
	for(var i = 0; i < this.Clientes.length; i++){
		fila = document.createElement("tr");
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Clientes[i].DNI);
		celda.appendChild(textoCelda);
		fila.appendChild(celda);
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Clientes[i].Nombre);
		celda.appendChild(textoCelda);
		fila.appendChild(celda);
		tblBody.appendChild(fila);
	}
	subTabla.appendChild(tblBody);
	//creamos la fila
	fila = document.createElement("tr");
	//creamos la celda ID y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.ID);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Duracion y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Duracion);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Fecha y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Fecha);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Hora y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Hora);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda TarifaHora y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.TarifaHora);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    if(this.Profesor != null){
	    //creamos la celda Profesor.DNI y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Profesor.DNI);
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
		//creamos la celda Profesor.Nombre y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode(this.Profesor.Nombre);
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	else{
		//creamos la celda Profesor.DNI y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
		//creamos la celda Profesor.Nombre y la introducimos en la fila
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	if(this.Clientes.length > 0){
		//creamos la celda Clientes y la introducimos en la fila
		celda = document.createElement("td");
	    celda.appendChild(subTabla);
	    fila.appendChild(celda);
	}
	else{
		celda = document.createElement("td");
		textoCelda = document.createTextNode("---");
	    celda.appendChild(textoCelda);
	    fila.appendChild(celda);
	}
	return fila;
}

function Matriculas(fCantidadAbonada, dFecha, oCliente, sIdMatricula, iNumPracticas, fPrecio){
	this.CantidadAbonada = fCantidadAbonada;
	this.ExPracticaPass = false;
	this.ExTeoricoPass = false;
	this.Fecha = dFecha;
	this.Cliente = oCliente;
	this.IdMatricula = sIdMatricula;
	this.NumeroPracticas = iNumPracticas;
	this.Precio = fPrecio;
}

Matriculas.prototype.toHTMLRow = function (){
	//creamos la fila
	var fila = document.createElement("tr");
	//creamos la celda IdMatricula y la introducimos en la fila
	var celda = document.createElement("td");
	var textoCelda = document.createTextNode(this.IdMatricula);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda CantidadAbonada y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.CantidadAbonada);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda ExTeoricoPass y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode((this.ExTeoricoPass==true?"SI":"NO"));
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    //creamos la celda ExPracticaPass y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode((this.ExPracticaPass==true?"SI":"NO"));
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Fecha y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Fecha);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Cliente.DNI y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Cliente.DNI);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Cliente.Nombre y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Cliente.Nombre);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda NumeroPracticas y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.NumeroPracticas);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Precio y la introducimos en la fila
	celda = document.createElement("td");
	textoCelda = document.createTextNode(this.Precio);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	return fila;
}

function Autoescuela(){
	this.arrCoches = [];
	this.arrClases = [];
	this.arrPersonas = [];
	this.arrMatriculas = [];
}

Autoescuela.prototype.altaPersona = function (oPersona){
	var strMensaje = "";
	//Buscar Persona
	if(this.arrPersonas.length == 0){
		this.arrPersonas.push(oPersona);
		strMensaje = "Persona dada de alta";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrPersonas.length; i++){
			var persona = this.arrPersonas[i];
			if(persona.DNI == oPersona.DNI){
				boolEsta = true;
			}
		}
		if(!boolEsta){
			this.arrPersonas.push(oPersona);
			strMensaje = "Persona dada de alta";
		}
		else{
			strMensaje = "La persona ya existe";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.altaCoche = function(oCoche){
	var strMensaje = "";
	//Buscar Coche
	if(this.arrCoches.length == 0){
		this.arrCoches.push(oCoche);
		strMensaje = "Coche dado de alta";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrCoches.length; i++){
			var coche = this.arrCoches[i];
			if(coche.Matricula == oCoche.Matricula){
				boolEsta = true;
			}
		}
		if(!boolEsta){
			this.arrCoches.push(oCoche);
			strMensaje = "Coche dado de alta";
		}
		else{
			strMensaje = "El coche ya existe";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.altaClases = function(oClase){
	var strMensaje = "";
	//Buscar Clase
	if(this.arrClases.length == 0){
		this.arrClases.push(oClase);
		strMensaje = "Clase dada de alta";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrClases.length; i++){
			var clase = this.arrClases[i];
			if(clase.ID == oClase.ID){
				boolEsta = true;
			}
		}
		if(!boolEsta){
			this.arrClases.push(oClase);
			strMensaje = "Clase dada de alta";
		}
		else{
			strMensaje = "La clase ya existe";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.altaMatriculas = function(oMatricula){
	var strMensaje = "";
	//Buscar Matricula
	if(this.arrMatriculas.length == 0){
		this.arrMatriculas.push(oMatricula);
		strMensaje = "Matricula dada de alta";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrMatriculas.length; i++){
			var matricula = this.arrMatriculas[i];
			if(matricula.IdMatricula == oMatricula.IdMatricula){
				boolEsta = true;
			}
		}
		if(!boolEsta){
			this.arrMatriculas.push(oMatricula);
			strMensaje = "Matricula dada de alta";
		}
		else{
			strMensaje = "La matricula ya existe";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.apruebaTeorico = function(sIdMatricula){
	var strMensaje = "";
	//Buscar Matricula
	if(this.arrMatriculas.length == 0){
		strMensaje = "No existe ninguna matricula con ese ID";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrMatriculas.length; i++){
			if(this.arrMatriculas[i].IdMatricula == sIdMatricula){
				boolEsta = true;
				this.arrMatriculas[i].ExTeoricoPass = true;
				strMensaje = "Matricula modificada satisfactoriamente";
			}
		}
		if(!boolEsta){
			strMensaje = "No existe ninguna matricula con ese ID";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.apruebaPractico = function(sIdMatricula){
	var strMensaje = "";
	//Buscar Matricula
	if(this.arrMatriculas.length == 0){
		strMensaje = "No existe ninguna matricula con ese ID";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrMatriculas.length; i++){
			if(this.arrMatriculas[i].IdMatricula == sIdMatricula){
				boolEsta = true;
				this.arrMatriculas[i].ExPracticaPass = true;
				strMensaje = "Matricula modificada satisfactoriamente";
			}
		}
		if(!boolEsta){
			strMensaje = "No existe ninguna matricula con ese ID";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.matricularClienteEnClases = function (sDNI, iID){
	var strMensaje = "";
	var oCliente;
	var oClase;
	//Buscar Cliente
	if(this.arrPersonas.length == 0){
		strMensaje = "No existe ningun cliente con ese DNI";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrPersonas.length; i++){
		if(this.arrPersonas[i].DNI == sDNI){
				boolEsta = true;
				oCliente = this.arrPersonas[i];
			}
		}
		if(!boolEsta){
			strMensaje = "No existe ningun cliente con ese DNI";
		}
		else{
			//Buscar clase
			if(this.arrClases.length == 0){
				strMensaje = "No existe ninguna clase con ese identificador";
			}
			else{
				boolEsta = false;
				for(var i = 0; i < this.arrClases.length; i++){
					if(this.arrClases[i].ID == iID){
						boolEsta = true;
						oClase = this.arrClases[i];
					}
				}
				if(!boolEsta){
					strMensaje = "No existe ninguna clase con ese identificador";
				}
				else{
					boolEsta = false;
					for(var i = 0; i < oClase.Clientes.length; i++){
						if(oClase.Clientes[i].DNI == sDNI){
							boolEsta = true;
						}
					}
					if(!boolEsta){
						oClase.Clientes.push(oCliente);
						strMensaje = "Cliente matriculado satisfactoriamente en la clase dada";
					}
					else{
						strMensaje = "El cliente ya ha sido matriculado previamente en la clase dada";
					}
				}
			}
		}
	}
	return strMensaje;
}

Autoescuela.prototype.AsignarProfesorAClases = function (sDNI, iID){
	var strMensaje = "";
	var oProfesor;
	//Buscar Profesor
	if(this.arrPersonas.length == 0){
		strMensaje = "No existe ningun profesor con ese DNI";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrPersonas.length; i++){
		if(this.arrPersonas[i].DNI == sDNI){
				boolEsta = true;
				oProfesor = this.arrPersonas[i];
			}
		}
		if(!boolEsta){
			strMensaje = "No existe ningun profesor con ese DNI";
		}
		else{
			//Buscar clase
			if(this.arrClases.length == 0){
				strMensaje = "No existe ninguna clase con ese identificador";
			}
			else{
				boolEsta = false;
				for(var i = 0; i < this.arrClases.length; i++){
					if(this.arrClases[i].ID == iID){
						boolEsta = true;
						if(this.arrClases[i].Profesor == null){
							this.arrClases[i].Profesor = oProfesor;
							strMensaje = "Profesor asignado satisfactoriamente en la clase dada";
						}
						else{
							strMensaje = "Esta clase ya tiene un profesor asignado";
						}
					}
				}
				if(!boolEsta){
					strMensaje = "No existe ninguna clase con ese identificador";
				}
			}
		}
	}
}

Autoescuela.prototype.bajaPersona = function(sDNI){
	var strMensaje = "";
	var persona;
	//Buscar Persona
	if(this.arrPersonas.length == 0){
		strMensaje = "No existe ninguna persona con ese DNI";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrPersonas.length; i++){
			if(this.arrPersonas[i].DNI == sDNI){
				boolEsta = true;
				persona = this.arrPersonas[i];
			}
		}
		if(!boolEsta){
			strMensaje = "No existe ninguna persona con ese DNI";
		}
		else{
			eliminarElementoArray(this.arrPersonas, persona);
			strMensaje = "Persona dada de baja satisfactoriamente";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.bajaMatricula = function(sIdMatricula){
	var strMensaje = "";
	var matricula;
	//Buscar Matricula
	if(this.arrMatriculas.length == 0){
		strMensaje = "No existe ninguna matricula con ese identificador";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrMatriculas.length; i++){
			if(this.arrMatriculas[i].IdMatricula == sIdMatricula){
				boolEsta = true;
				matricula = this.arrMatriculas[i];
			}
		}
		if(!boolEsta){
			strMensaje = "No existe ninguna matricula con ese identificador";
		}
		else{
			eliminarElementoArray(this.arrMatriculas, matricula);
			strMensaje = "Matricula dada de baja satisfactoriamente";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.bajaCoche = function(sMatricula){
	var strMensaje = "";
	var coche;
	//Buscar Coche
	if(this.arrCoches.length == 0){
		strMensaje = "No existe ningun coche con esa matricula";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrCoches.length; i++){
			if(this.arrCoches[i].Matricula == sMatricula){
				boolEsta = true;
				coche = this.arrCoches[i];
			}
		}
		if(!boolEsta){
			strMensaje = "No existe ningun coche con esa matricula";
		}
		else{
			eliminarElementoArray(this.arrCoches, coche);
			strMensaje = "Coche dado de baja satisfactoriamente";
		}
	}
	return strMensaje;
}

Autoescuela.prototype.listadoClases = function(Clave, Valor){
	//Creamos la tabla
	var Tabla   = document.createElement("table");
	Tabla.setAttribute("border","1");
	var tblBody = document.createElement("tbody");
	var fila = document.createElement("tr");
	//Creamos el encabezado
	var celdaCabecera = document.createElement("th");
    var textoCelda = document.createTextNode("Identificador");
    celdaCabecera.appendChild(textoCelda);
    fila.appendChild(celdaCabecera);
	
	celdaCabecera = document.createElement("th");
    textoCelda = document.createTextNode("Duracion");
    celdaCabecera.appendChild(textoCelda);
    fila.appendChild(celdaCabecera);
	
	celdaCabecera = document.createElement("th");
    textoCelda = document.createTextNode("Fecha");
    celdaCabecera.appendChild(textoCelda);
    fila.appendChild(celdaCabecera);
	
	celdaCabecera = document.createElement("th");
    textoCelda = document.createTextNode("Hora");
    celdaCabecera.appendChild(textoCelda);
    fila.appendChild(celdaCabecera);
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Tarifa / Aforo");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	celdaCabecera = document.createElement("th");
	textoCelda = document.createTextNode("DNI profesor");
    celdaCabecera.appendChild(textoCelda);
    fila.appendChild(celdaCabecera);
	celdaCabecera = document.createElement("th");
	textoCelda = document.createTextNode("Nombre Profesor");
    celdaCabecera.appendChild(textoCelda);
    fila.appendChild(celdaCabecera);
	celdaCabecera = document.createElement("th");
	textoCelda = document.createTextNode("Clientes");
    celdaCabecera.appendChild(textoCelda);
    fila.appendChild(celdaCabecera);
	//Fin de encabezado
	tblBody.appendChild(fila);
	
	var arrBusqueda = [];
	switch(Clave){
		case "Identificador":
			for(var j = 0; j < this.arrClases.length; j++){
				if(this.arrClases[j].ID == Valor){
					arrBusqueda.push(this.arrClases[j]);
				}
			}
		break;
		case "DNI profesor":
			for(var j = 0; j < this.arrClases.length; j++){
				if(this.arrClases[j].Profesor.DNI == Valor){
					arrBusqueda.push(this.arrClases[j]);
				}
			}
		break;
		case "Nombre profesor":
			for(var j = 0; j < this.arrClases.length; j++){
				if(this.arrClases[j].Profesor.Nombre == Valor){
					arrBusqueda.push(this.arrClases[j]);
				}
			}
		break;
		case "Clientes DNI":
			for(var j = 0; j < this.arrClases.length; j++){
				for(var k = 0; k < this.arrClases[j].Clientes.length; k++){
					if(this.arrClases[j].Clientes[k].DNI == Valor){
						arrBusqueda.push(this.arrClases[j]);
					}
				}
			}
		break;
		case "Clientes Nombre":
			for(var j = 0; j < this.arrClases.length; j++){
				for(var k = 0; k < this.arrClases[j].Clientes.length; k++){
					if(this.arrClases[j].Clientes[k].Nombre == Valor){
						arrBusqueda.push(this.arrClases[j]);
					}
				}
			}
		break;
	}
	if(Clave == ""){
		arrBusqueda = this.arrClases;
	}
	for(var i = 0; i < arrBusqueda.length; i++){
		tblBody.appendChild(arrBusqueda[i].toHTMLRow());
	}
	
	Tabla.appendChild(tblBody);
	
	return Tabla;//Devolvemos la tabla ya preparada para insertarla en el documento
}

Autoescuela.prototype.ListadoPersonas = function (Clave, Valor){
	//Creamos la tabla
	var Tabla   = document.createElement("table");
	Tabla.setAttribute("border","1");
	var tblBody = document.createElement("tbody");
	var fila = document.createElement("tr");
	//creamos la celda DNI y la introducimos en la fila
	var celda = document.createElement("th");
	var textoCelda = document.createTextNode("DNI");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Nombre y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Nombre");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Apellidos y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Apellidos");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Telefono y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Telefono");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Direccion y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Direccion");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Email y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Email");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    //creamos la celda ID y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("ID");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//Fin de encabezado
	tblBody.appendChild(fila);
	
	var arrBusqueda = [];
	switch(Clave){
		case "DNI":
			for(var j = 0; j < this.arrPersonas.length; j++){
				if(this.arrPersonas[j].DNI == Valor){
					arrBusqueda.push(this.arrPersonas[j]);
				}
			}
		break;
		case "Nombre":
			for(var j = 0; j < this.arrPersonas.length; j++){
				if(this.arrPersonas[j].Nombre == Valor){
					arrBusqueda.push(this.arrPersonas[j]);
				}
			}
		break;
		case "Apellidos":
			for(var j = 0; j < this.arrPersonas.length; j++){
				if(this.arrPersonas[j].Apellidos == Valor){
					arrBusqueda.push(this.arrPersonas[j]);
				}
			}
		break;
		case "Email":
			for(var j = 0; j < this.arrPersonas.length; j++){
				if(this.arrPersonas[j].Email == Valor){
					arrBusqueda.push(this.arrPersonas[j]);
				}
			}
		break;
		case "Telefono":
			for(var j = 0; j < this.arrPersonas.length; j++){
				if(this.arrPersonas[j].Telefono == Valor){
					arrBusqueda.push(this.arrPersonas[j]);
				}
			}
		break;
		case "ID":
			for(var j = 0; j < this.arrPersonas.length; j++){
				if(this.arrPersonas[j].ID == Valor){
					arrBusqueda.push(this.arrPersonas[j]);
				}
			}
		break;
	}
	
	if(Clave == ""){
		arrBusqueda = this.arrPersonas;
	}
	for(var i = 0; i < arrBusqueda.length; i++){
		tblBody.appendChild(arrBusqueda[i].toHTMLRow());
	}
	
	Tabla.appendChild(tblBody);
	
	return Tabla;//Devolvemos la tabla ya preparada para insertarla en el documento
}

Autoescuela.prototype.ListadoCoches = function (Clave, Valor){
	//Creamos la tabla
	var Tabla   = document.createElement("table");
	Tabla.setAttribute("border","1");
	var tblBody = document.createElement("tbody");
	var fila = document.createElement("tr");
	//creamos la celda Marca y la introducimos en la fila
	var celda = document.createElement("th");
	var textoCelda = document.createTextNode("Marca");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Matricula y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Matricula");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Modelo y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Modelo");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//Fin de encabezado
	tblBody.appendChild(fila);
	
	var arrBusqueda = [];
	switch(Clave){
		case "Marca":
			for(var j = 0; j < this.arrCoches.length; j++){
				if(this.arrCoches[j].Marca == Valor){
					arrBusqueda.push(this.arrCoches[j]);
				}
			}
		break;
		case "Matricula":
			for(var j = 0; j < this.arrCoches.length; j++){
				if(this.arrCoches[j].Matricula == Valor){
					arrBusqueda.push(this.arrCoches[j]);
				}
			}
		break;
		case "Modelo":
			for(var j = 0; j < this.arrCoches.length; j++){
				if(this.arrCoches[j].Modelo == Valor){
					arrBusqueda.push(this.arrCoches[j]);
				}
			}
		break;
	}
	
	if(Clave == ""){
		arrBusqueda = this.arrCoches;
	}
	for(var i = 0; i < arrBusqueda.length; i++){
		tblBody.appendChild(arrBusqueda[i].toHTMLRow());
	}
	
	Tabla.appendChild(tblBody);
	
	return Tabla;//Devolvemos la tabla ya preparada para insertarla en el documento
}

Autoescuela.prototype.ListadoMatriculas = function (Clave, Valor){
	//Creamos la tabla
	var Tabla   = document.createElement("table");
	Tabla.setAttribute("border","1");
	var tblBody = document.createElement("tbody");
	var fila = document.createElement("tr");
	//creamos la celda IdMatricula y la introducimos en la fila
	var celda = document.createElement("th");
	var textoCelda = document.createTextNode("Identificador Matricula");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda CantidadAbonada y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Cantidad abonada");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda ExTeoricoPass y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Examen Teorico aprobado");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    //creamos la celda ExPracticaPass y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Examen Practico aprobado");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Fecha y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Fecha");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Cliente.DNI y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("DNI Cliente");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Cliente.Nombre y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Nombre Clinte");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda NumeroPracticas y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Numero de practicas");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//creamos la celda Precio y la introducimos en la fila
	celda = document.createElement("th");
	textoCelda = document.createTextNode("Precio");
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
	//Fin de encabezado
	tblBody.appendChild(fila);
	
	/*
	this.CantidadAbonada = fCantidadAbonada;
	this.ExPracticaPass = false;
	this.ExTeoricoPass = false;
	this.Fecha = dFecha;
	this.Cliente = oCliente;
	this.IdMatricula = sIdMatricula;
	this.NumeroPracticas = iNumPracticas;
	this.Precio = fPrecio;*/
	
	var arrBusqueda = [];
	switch(Clave){
		case "Identificador Matricula":
			for(var j = 0; j < this.arrMatriculas.length; j++){
				if(this.arrMatriculas[j].IdMatricula == Valor){
					arrBusqueda.push(this.arrMatriculas[j]);
				}
			}
		break;
		case "Examen Teorico aprobado":
			for(var j = 0; j < this.arrMatriculas.length; j++){
				var auxiliar;
				if(Valor == "SI"){
					auxiliar = true;
				}
				else{
					auxiliar = false;
				}
				if(this.arrMatriculas[j].ExTeoricoPass == auxiliar){
					arrBusqueda.push(this.arrMatriculas[j]);
				}
			}
		break;
		case "Examen Practico aprobado":
			for(var j = 0; j < this.arrMatriculas.length; j++){
				var auxiliar;
				if(Valor == "SI"){
					auxiliar = true;
				}
				else{
					auxiliar = false;
				}
				if(this.arrMatriculas[j].ExPracticaPass == auxiliar){
					arrBusqueda.push(this.arrMatriculas[j]);
				}
			}
		break;
		case "Fecha":
			for(var j = 0; j < this.arrMatriculas.length; j++){
				if(this.arrMatriculas[j].Fecha == Valor){
					arrBusqueda.push(this.arrMatriculas[j]);
				}
			}
		break;
		case "DNI Cliente":
			for(var j = 0; j < this.arrMatriculas.length; j++){
				if(this.arrMatriculas[j].Cliente.DNI == Valor){
					arrBusqueda.push(this.arrMatriculas[j]);
				}
			}
		break;
		case "Nombre Cliente":
			for(var j = 0; j < this.arrMatriculas.length; j++){
				if(this.arrMatriculas[j].Cliente.Nombre == Valor){
					arrBusqueda.push(this.arrMatriculas[j]);
				}
			}
		break;
	}
	
	if(Clave == ""){
		arrBusqueda = this.arrMatriculas;
	}
	for(var i = 0; i < arrBusqueda.length; i++){
		tblBody.appendChild(arrBusqueda[i].toHTMLRow());
	}
	
	Tabla.appendChild(tblBody);
	
	return Tabla;//Devolvemos la tabla ya preparada para insertarla en el documento
}

Autoescuela.prototype.BuscarPersona = function(sDNI){
	var persona;
	if(this.arrPersonas.length == 0){
		return "No existe ninguna persona con ese DNI";
	}
	else{
		var boolEsta = false;
		for(var i = 0; i < this.arrPersonas.length; i++){
			if(this.arrPersonas[i].DNI == sDNI){
				boolEsta = true;
				persona = this.arrPersonas[i];
			}
		}
		if(!boolEsta){
			return "No existe ninguna persona con ese DNI";
		}
		else{
			return persona;
		}
	}
}

//Metodo auxiliar
function eliminarElementoArray ( arr, item ) {
    var i = arr.indexOf( item );
    arr.splice( i, 1 );
}