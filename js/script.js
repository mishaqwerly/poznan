$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  cssEase: 'ease',
  arrows: false
});


function initMap() {
	var element = document.getElementById('map');
	var options = {
		scrollwheel: false,
		streetViewControl: false,
    	mapTypeControl: false,
		zoom: 15,
		center: {lat: 52.426792, lng: 16.937116},
    disableDefaultUI: true
	};


	var image = 'img/marker.png';

	var myMap = new google.maps.Map(element, options);
	addMarker({lat: 52.426792, lng: 16.937116});

	function addMarker(coordinates) {
		var marker = new google.maps.Marker({
			position: coordinates,
			map: myMap,
			icon: image
		});
	}
}