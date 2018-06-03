$(function(){

	var nav = $('.navbar'),
		doc = $(document),
		win = $(window);

	win.scroll(function() {

		if (doc.scrollTop() > 80) {
			nav.addClass('scrolled');
		} else {
			nav.removeClass('scrolled');
		}

	});

	// Trigger the scroll listener on page load

	win.scroll();
});


var map = new GMaps({
    el: '#map',
    lat:  40.730610,
    lng: -73.935242
});

map.addMarker({
    lat: 40.700610,
    lng: -73.997242,
    title: 'New York',
    infoWindow: {
      content: 'New York'
    }
});

map.setZoom(8);
