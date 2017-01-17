function Persona(sApellidos,sDireccion, sDNI, sEmail, sNombre, iTelefono){
	this.Apellidos = sApellidos;
	this.Direccion = sDireccion;
	this.DNI = sDNI;
	this.Email = sEmail;
	this.Nombre = sNombre;
	this.Telefono = iTelefono;
}

Persona.prototype.toHTMLRow = function (){
	return "<tr><td>" + this.DNI + "</td><td>" + this.Nombre + "</td><td>" + this.Apellidos + "</td><td>" + this.Telefono + "</td><td>" + this.Direccion + "</td><td>" + this.Email + "</td></tr>";
}

function Profesor(sApellidos,sDireccion, sDNI, sEmail, sNombre, iTelefono){
	Persona.call(this, sApellidos,sDireccion,sDNI,sEmail,sNombre,iTelefono);
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.toHTMLRow = function (){
	return "<tr><td>" + this.DNI + "</td><td>" + this.Nombre + "</td><td>" + this.Apellidos + "</td><td>" + this.Telefono + "</td><td>" + this.Direccion + "</td><td>" + this.Email + "</td></tr>";
}

function Cliente(sApellidos,sDireccion, sDNI, sEmail, sNombre, iTelefono){
	Persona.call(this, sApellidos,sDireccion,sDNI,sEmail,sNombre,iTelefono);
}

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.toHTMLRow = function (){
	return "<tr><td>" + this.DNI + "</td><td>" + this.Nombre + "</td><td>" + this.Apellidos + "</td><td>" + this.Telefono + "</td><td>" + this.Direccion + "</td><td>" + this.Email + "</td></tr>";
}

function Coche(sMarca, sMatricula, sModelo){
	this.Marca = sMarca;
	this.Matricula = sMatricula;
	this.Modelo = sModelo;
}

Coche.prototype.toHTMLRow = function (){
	return "<tr><td>" + this.Marca + "</td><td>" + this.Matricula + "</td><td>" + this.Modelo + "</td></tr>";
}

function Clases (iId, fDuracion, dFecha, sHora, oProfesor, arrClientes){
	this.ID = iId;
	this.Duracion = fDuracion;
	this.Fecha = dFecha;
	this.Hora = sHora;
	this.Profesor = oProfesor;
	this.Clientes = arrClientes;
}

Clases.prototype.toHTMLRow = function (){
	return "<tr><td>" + this.ID + "</td><td>" + this.Duracion + "</td><td>" + this.Fecha + "</td><td>" + this.Hora + "</td></tr>";
}


Clases.prototype.clientesAsistenToHTMLRow = function (){
	var subResult = "<table border='1'>";
	for(var i = 0; i < this.Clientes.length; i++){
		subResult += "<tr><td>"+this.Clientes[i].DNI+" - "+this.Clientes[i].Nombre+"</td></tr>";
	}
	subResult += "</table>";
	
	return "<tr><td>" + this.ID + "</td><td>" + this.Duracion + "</td><td>" + this.Fecha + "</td><td>" + this.Hora + "</td><td>" + subResult + "</td></tr>";
}

Clases.prototype.profesorImparteToHTMLRow = function (){
	return "<tr><td>" + this.ID + "</td><td>" + this.Duracion + "</td><td>" + this.Fecha + "</td><td>" + this.Hora + "</td><td>" + this.Profesor.DNI + "</td><td>" + this.Profesor.Nombre + "</td></tr>";
}

function Teoricas(iId, fDuracion, dFecha, sHora, iAforo){
	Clases.call(this. iId,fDuracion,dFecha,sHora);
	this.Aforo = iAforo;
}

Teoricas.prototype = Object.create(Clases.prototype);
Teoricas.prototype.constructor = Teoricas;

Teoricas.prototype.toHTMLRow = function (){
	return "<tr><td>" + this.ID + "</td><td>" + this.Duracion + "</td><td>" + this.Fecha + "</td><td>" + this.Hora + "</td><td>" + this.Aforo + "</td></tr>";
}

function Practicas(iId, fDuracion, dFecha, sHora, fTarifaHora, oCoche){
	Clases.call(this. iId,fDuracion,dFecha,sHora);
	this.TarifaHora = fTarifaHora;
	this.Coche = oCoche;
}

Practicas.prototype = Object.create(Clases.prototype);
Practicas.prototype.constructor = Practicas;

Practicas.prototype.toHTMLRow = function (){
	return "<tr><td>" + this.ID + "</td><td>" + this.Duracion + "</td><td>" + this.Fecha + "</td><td>" + this.Hora + "</td><td>" + this.TarifaHora + "</td><td>" + this.Coche.Matricula + "</td><td>" + this.Coche.Marca + "</td><td>" + this.Coche.Modelo + "</td></tr>";
}

function Matriculas(iAsistenciaExamen, fCantidadAbonada, dFecha, oCliente, sIdMatricula, iNumPracticas, fPrecio){
	this.AsistenciaExamen = iAsistenciaExamen;
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
	return "<tr><td>" + this.AsistenciaExamen + "</td><td>" + this.CantidadAbonada + "</td><td>" + (this.ExPracticaPass==true?"SI":"NO") + "</td><td>" + (this.ExTeoricoPass==true?"SI":"NO") + "</td><td>" + this.Fecha + "</td><td>" + this.Cliente.DNI + "</td><td>" + this.Cliente.Nombre + "</td><td>" + this.IdMatricula + "</td><td>" + this.NumeroPracticas + "</td><td>" + this.Precio + "</td></tr>";
}

function Autoescuela(sCif, sDireccion, sNombre, iTelefono){
	this.Cif = sCif;
	this.Direccion = sDireccion;
	this.Nombre = sNombre;
	this.Telefono = iTelefono;
	this.arrCoches = [];
	this.arrClases = [];
	this.arrPersonas = [];
	this.arrMatriculas = [];
}