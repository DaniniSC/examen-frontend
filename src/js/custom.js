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

	//NO MODIFICAR - buscamos la ciudad (objeto)
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
			$('.valorBencinaMoto').append('<p class="precios"> $' + Math.round(distanciaRuta/21)*673 + '</p>');
			$('.valorBencinaAuto').append('<p class="precios"> $' + Math.round(distanciaRuta/12)*673 + '</p>');
			$('.valorBencinaVan').append('<p class="precios"> $' + Math.round(distanciaRuta/7)*673 + '</p>');
			$('.valorBencinaCamion').append('<p class="precios"> $' + Math.round(distanciaRuta/6)*673 + '</p>');
		});
		//habilitamos el botón buscar si hay ambos select elegidos
		$('.botonBuscar').prop('disabled', false);
	});
	//función para quitar display none y seleccionar vehiculo
	$('.botonBuscar').on('click', function(e){
		$('#calculator').removeClass('ocultar');
	});

	//funcion para compartir carro
	$('.botonCompartir').on('click', function(e){
		var precioEnMoto = $('.valorBencinaMoto .precios');
		var precioEnAuto = $('.valorBencinaAuto .precios');
		var precioEnVan = $('.valorBencinaVan .precios');
		var precioEnCamion = $('.valorBencinaCamion .precios');
		var cantidadDePasajeros = $('.nDePasaj').val();
		if (tipoVeh == 'moto'){
			if (cantidadDePasajeros<=2){
				alert('Costo por persona: $' + Math.round(precioEnMoto/cantidadDePasajeros) + ' CLP');
			} else {
				alert('Máximo 2 pasajeros');
			}
		} else if (tipoVeh == 'auto'){
			if (cantidadDePasajeros<=5) {
				alert('Costo por persona: $' + Math.round(precioEnAuto/cantidadDePasajeros) + ' CLP');
			} else {
				alert('Máximo 5 pasajeros');
			}
		} else if (tipoVeh == 'van'){
			if (cantidadDePasajeros<=10) {
				alert('Costo por persona: $' + Math.round(precioEnVan/cantidadDePasajeros) + ' CLP');
			} else {
				alert('Máximo 10 pasajeros');
			}
		} else if (tipoVeh == 'camion'){
			if (cantidadDePasajeros<=3) {
				alert('Costo por persona: $' + Math.round(precioEnCamion/cantidadDePasajeros) + ' CLP');
			} else {
				alert('Máximo 3 pasajeros');
			}
		} else {
			return;
		}
	})
});
