function initMap(){
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 8, //nivel de profundidad
		center: {lat: -33.437778, lng: -70.650278}, //coordenadas de Santiago
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});

	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}

	document.getElementById("encuentrame").addEventListener("click", buscar);

	var latitud, longitud;

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map
		});

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}

	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tu ubicación");
	}

	//Autocompletado Input
	var autocompleteOrigen = new google.maps.places.Autocomplete(document.getElementById("origen"));
	autocompleteOrigen.bindTo('bounds', map);
	var autocompleteDestino = new google.maps.places.Autocomplete(document.getElementById("destino"));
	autocompleteDestino.bindTo('bounds', map);
}
initMap();
