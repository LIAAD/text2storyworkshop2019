jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

    // --------------------------------------------------------------------
    // Map
    // --------------------------------------------------------------------

    (function () {
        var latitude  = 50.944512; //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
        var longitude = 6.9503217;
        var map_zoom  = 14;

        var platform = new H.service.Platform({
            'app_id': 'IwGH4C4l25qnAx4Ysqsb',
            'app_code': 'j3LDYCZGo1TBuCP3lxwEqw'
          });

          // Obtain the default map types from the platform object:
            var defaultLayers = platform.createDefaultLayers();

            // Instantiate (and display) a map object:
            var map = new H.Map(
            document.getElementById('mapContainer'),
            defaultLayers.normal.map);

            // center address
            map.setCenter({lat:latitude, lng:longitude});
            map.setZoom(map_zoom);

            // add marker
            map.addObject(new H.map.Marker({lat:latitude, lng:longitude}));

            //Step 3: make the map interactive
            // MapEvents enables the event system
            // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
            // Create the default UI components
            var ui = H.ui.UI.createDefault(map, defaultLayers);

    }());

}); // JQuery end
