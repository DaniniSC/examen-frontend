$(document).ready(function(){

	//NO MODIFICAR - array con ciudades de chile
	var ciudades = [
		{
			name: "Arica",	
			distance: 2059
		},
		{
			name: "Iquique",	
			distance: 1789
		},
		{
			name: "Antofagasta",	
			distance: 1368
		},
		{
			name: "Copiapó",	
			distance: 1567
		},
		{
			name: "La Serena",	
			distance: 470
		},
		{
			name: "Valparaíso",	
			distance: 116
		},
		{
			name: "Santiago",
			distance: 0
		},
		{
			name: "Rancagua",
			distance: -84
		},
		{
			name: "Talca",
			distance: -257
		},
		{
			name: "Concepción",
			distance: -500
		},
		{
			name: "Temuco",
			distance: -690
		},
		{
			name: "Valdivia",
			distance: -848
		},
		{
			name: "Puerto Montt",
			distance: -1032
		},
		{
			name: "Coyhaique",
			distance: -1888
		},
		{
			name: "Punta Arenas",
			distance: -3004
		}
	];

	//NO MODIFICAR - se agregan options en el html
	for (var i=0; i<ciudades.length; ++i){
		$('#selectOrigen').append('<option value="' + ciudades[i].name + '">' + ciudades[i].name + '</option>');
		$('#selectDestino').append('<option value="' + ciudades[i].name + '">' + ciudades[i].name + '</option>');
	}

	//NO MODIFICAR - se deshabilita el select Destino cuando el Origen ya está definido
	$('#selectOrigen').on('change', function(){
		var valor = $('#selectOrigen').val();
		if (valor !== "0"){
			$('#selectDestino').prop('disabled', false);
		}
	});

	//buscamos la ciudad (objeto)
	$('#selectOrigen, #selectDestino').on('change', function(){
		var valorOrigen = $('#selectOrigen').val();
		var valorDestino = $('#selectDestino').val();
		if (valorOrigen == '0' || valorDestino == '0'){
			return;
		}
		var ciudadOrigen = null;
		var ciudadDestino = null;
		for (var i=0; i<ciudades.length; ++i){
			if (ciudades[i].name == valorOrigen){
				ciudadOrigen = ciudades[i];
			}
			if (ciudades[i].name == valorDestino){
				ciudadDestino = ciudades[i];
			}
		}
		//función para quitar display none y seleccionar vehiculo
		$('.botonBuscar').on('click', function(e){
			$('#calculator').removeClass('ocultar');
			//función para calcular valor de la bencina
			var distanciaRuta = Math.abs(ciudadOrigen.distance - ciudadDestino.distance);
			$('.valorBencinaMoto').append('$' + Math.round(distanciaRuta/21)*673);
			$('.valorBencinaAuto').append('$' + Math.round(distanciaRuta/12)*673);
			$('.valorBencinaVan').append('$' + Math.round(distanciaRuta/7)*673);
			$('.valorBencinaCamion').append('$' + Math.round(distanciaRuta/6)*673);
		});
		//habilitamos el botón buscar si hay ambos select elegidos
		$('.botonBuscar').prop('disabled', false);
	});
	//función para quitar display none y seleccionar vehiculo
	$('.botonBuscar').on('click', function(e){
		$('#calculator').removeClass('ocultar');
	});
});
