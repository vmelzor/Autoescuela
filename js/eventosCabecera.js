// Eventos de los botones de la cabecera
$("#btnGestionPersona").click(function(){ oDlgFormuGestionPersona.dialog("open"); });
$("#btnGestionMatricula").click(function(){ oDlgFormuGestionMatricula.dialog("open"); cargarComboGestionMatricula(); });
$("#btnGestionClases").click(function(){ oDlgFormuGestionClases.dialog("open"); cargarComboGestionClases();});
$("#btnGestionCoche").click(function(){ oDlgFormuGestionCoche.dialog("open"); cargarFormularioDinamicamente();});
$("#btnAprobarTeorico").click(function(){ oDlgFormuAprobarTeorico.dialog("open"); cargarComboMatriculasTeorico();});
$("#btnAprobarPractico").click(function(){ oDlgFormuAprobarPractico.dialog("open"); cargarComboMatriculasPractico();});


$("#btnListadoClases").click(function(){listadoClases();});
$("#btnListadoCoche").click(function(){listadoCoche();});
$("#btnListadoPersona").click(function(){listadoPersona();});
$("#btnListadoMatricula").click(function(){listadoMatriculas();});



// Eventos de los botones de los formularios
	// Gestion personas
	document.formu_gestionPersona.añadir.addEventListener("click", altaPersona);
	document.formu_gestionPersona.mod.addEventListener("click", modPersona);

	// Gestion matriculas
	document.formu_gestionMatricula.añadir.addEventListener("click", altaMatricula);
	document.formu_gestionMatricula.baja.addEventListener("click", bajaMatricula);

	// Gestion coches
	document.formu_gestionCoche.añadir.addEventListener("click", altaCoche);
	document.formu_gestionCoche.baja.addEventListener("click", bajaCoche);
	document.formu_gestionCoche.mod.addEventListener("click", modCoche);

	// Gestion clases
	document.formu_gestionClases.añadir.addEventListener("click", altaClase);

	// Aprobar teorico
	document.formu_aprobarTeorico.mod.addEventListener("click", aprobarTeorico);

	// Aprobar practico
	document.formu_aprobarPractico.mod.addEventListener("click", aprobarPractico);
	
	// busqueda avanzada clases
	document.formu_busquedaAvanzadaClase.buscar.addEventListener("click", listadoClasesConValores);
	
	// busqueda avanzada coches
	document.formu_busquedaAvanzadaCoche.buscar.addEventListener("click", listadoCocheConValores);
	
	// busqueda avanzada Persona
	document.formu_busquedaAvanzadaPersona.buscar.addEventListener("click", listadoPersonaConValores);
	
	// busqueda avanzada Matricula
	document.formu_busquedaAvanzadaMatricula.buscar.addEventListener("click", listadoMatriculaConValores);
	
