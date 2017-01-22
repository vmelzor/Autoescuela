function añadirDatos2(){
	var oXML = loadXMLDoc("Autoescuela.xml");
	
	//Recogemos los datos de coche
	var aCoche = oXML.getElementsByTagName("Coche");
	
	for(var i = 0; i < aCoche.length; i++){
		var Marca, Matricula, Modelo;
		for(var j = 0; j < aCoche[i].childNodes.length; j++){
			if(aCoche[i].childNodes[j].nodeType == 1){
				var nodo = oXML.getElementsByTagName(aCoche[i].childNodes[j].nodeName)[i];
				switch(nodo.nodeName){
					case "Marca":
						Marca = nodo.getAttribute("value");
					break;
					case "MatriculaCoche":
						Matricula = nodo.getAttribute("value");
					break;
					case "Modelo":
						Modelo = nodo.getAttribute("value");
					break;
				}
			}
		}
		oAutoescuela.altaCoche(new Coche(Marca, Matricula, Modelo));
	}
	
	//Recogemos los datos de Persona
	var aPersona = oXML.getElementsByTagName("Persona");
	
	for(var i = 0; i < aPersona.length; i++){
		var DNI, Nombre, Apellidos, Direccion, Email, Telefono, ID;
		for(var j = 0; j < aPersona[i].childNodes.length; j++){
			if(aPersona[i].childNodes[j].nodeType == 1){
				var nodo = aPersona[i].childNodes[j];
				switch(nodo.nodeName){
					case "DNI":
						DNI = nodo.getAttribute("value");
					break;
					case "Nombre":
						Nombre = nodo.getAttribute("value");
					break;
					case "Apellidos":
						Apellidos = nodo.getAttribute("value");
					break;
					case "Direccion":
						Direccion = nodo.getAttribute("value");
					break;
					case "Email":
						Email = nodo.getAttribute("value");
					break;
					case "Telefono":
						Telefono = nodo.getAttribute("value");
					break;
					case "IdPersona":
						ID = nodo.getAttribute("value");
					break;
				}
			}
		}
		if(aPersona[i].getAttribute("Tipo") == "Profesor"){
			oAutoescuela.altaPersona(new Profesor(Apellidos, Direccion, DNI, Email, Nombre, Telefono, ID));
		}
		else{
			oAutoescuela.altaPersona(new Cliente(Apellidos, Direccion, DNI, Email, Nombre, Telefono, ID));
		}
	}
	
	//Recogemos los datos de Matriculas
	var aMatricula = oXML.getElementsByTagName("Matricula");
	
	for(var i = 0; i < aMatricula.length; i++){
		var IdMatricula, CantidadAbonada, Fecha, oCliente, NumeroPracticas, Precio;
		for(var j = 0; j < aMatricula[i].childNodes.length; j++){
			if(aMatricula[i].childNodes[j].nodeType == 1){
				var nodo = aMatricula[i].childNodes[j];
				switch(nodo.nodeName){
					case "IdMatricula":
						IdMatricula = nodo.getAttribute("value");
					break;
					case "CantidadAbonada":
						CantidadAbonada = nodo.getAttribute("value");
					break;
					case "FechaMatricula":
						Fecha = nodo.getAttribute("value");
					break;
					case "NumeroPracticas":
						NumeroPracticas = nodo.getAttribute("value");
					break;
					case "Cliente":
						var dni = nodo.getAttribute("value");
						oCliente = oAutoescuela.BuscarPersona(dni);
					break;
					case "Precio":
						Precio = nodo.getAttribute("value");
					break;
				}
			}
		}
		oAutoescuela.altaMatriculas(new Matriculas(CantidadAbonada, Fecha, oCliente, IdMatricula, NumeroPracticas, Precio));		
	}
	
	//Recogemos los datos de clase
	var aClase = oXML.getElementsByTagName("Clase");
	
	for(var i = 0; i < aClase.length; i++){
		var IdClase, Duracion, FechaClase, Hora, AforoTarifa, DniProfesor="", arrDniCliente=[];
		for(var j = 0; j < aClase[i].childNodes.length; j++){
			if(aClase[i].childNodes[j].nodeType == 1){
				var nodo = oXML.getElementsByTagName(aClase[i].childNodes[j].nodeName)[i];
				switch(nodo.nodeName){
					case "IdClase":
						IdClase = nodo.getAttribute("value");
					break;
					case "Duracion":
						Duracion = nodo.getAttribute("value");
					break;
					case "FechaClase":
						FechaClase = nodo.getAttribute("value");
					break;
					case "Hora":
						Hora = nodo.getAttribute("value");
					break;
					case "AforoTarifa":
						AforoTarifa = nodo.getAttribute("value");
					break;
					case "ProfesorClase":
						if(nodo.getAttribute("value") != ""){
							DniProfesor = nodo.getAttribute("value");
						}
					break;
					case "ClientesClase":
						if(nodo.childNodes[1] != null){
							for(var k = 0; k < nodo.childNodes.length; k++){
								if(nodo.childNodes[k].nodeType == 1){
									arrDniCliente.push(nodo.childNodes[k].getAttribute("value"));
								}
							}
						}
						
					break;
				}
			}
		}
		if(aClase[i].getAttribute("Tipo") == "Practicas"){
			oAutoescuela.altaClases(new Practicas(IdClase, Duracion, FechaClase, Hora, AforoTarifa));
		}
		else{
			oAutoescuela.altaClases(new Teoricas(IdClase, Duracion, FechaClase, Hora, AforoTarifa));
		}
		if(DniProfesor != ""){
			oAutoescuela.AsignarProfesorAClases(DniProfesor, IdClase);
		}
		if(arrDniCliente.length > 0){
			for(var j = 0; j < arrDniCliente.length; j++){
				oAutoescuela.matricularClienteEnClases(arrDniCliente[j], IdClase);
			}
		}
	}
}

function loadXMLDoc(filename){
    if (window.XMLHttpRequest){
        xhttp=new XMLHttpRequest();
    }
    else{
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);

    xhttp.send();

    return xhttp.responseXML;
}