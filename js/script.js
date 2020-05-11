/*  ===========================================
|   |   |   |   Preloader
============================================ */

$(window).on('load', function () {

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});

/*  ===========================================
|   |   |   |   Team
============================================ */

$(function () {

    $('#about-table').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        checkVisibility: false

    });
});

/*  ===========================================
|   |   |   |   Progress Bars
============================================ */

$(function () {

    $('#progress-elements').waypoint(function () {

        $('.progress-bar').each(function () {

            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/*  ===========================================
|   |   |   |   Responsive Tabs
============================================ */

$(function () {

    $("#focus-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/*  ===========================================
|   |   |   |   Navigation
============================================ */

/* Show & Hide Dark Navigation */
$(function () {

    // Show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // Show/hide Nav on windows scroll
        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 500) {

            // Show Dark Navigation
            $("nav").addClass("dark-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-cm-color.png");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide Dark Navigation
            $("nav").removeClass("dark-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-cm-dark.png");
            
            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // Get all section id's
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo");
    });
});

/*  ===========================================
|   |   |   |       Maps
============================================ */

/**
 * Add Ingolstadt marker to the map
 */
function addMarkersToMap(map) {
    var ingolstadtMarker = new H.map.Marker({
        lat: 48.76508,
        lng: 11.42372
    });
    map.addObject(ingolstadtMarker);
}

// Initialize communication with the platform
var platform = new H.service.Platform({
    apikey: '3Iot4lYtEQ9jI6H1jEHR',
});
var defaultLayers = platform.createDefaultLayers();

// Initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
        center: {
            lat: 50,
            lng: 5
        },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
    });

// Add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Mmake the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Use the map as required
window.onload = function () {
    addMarkersToMap(map);
}

/*  ===========================================
|   |   |   |   Technology
============================================ */

$(window).on('load', function() {
   
    // Initialize Isotope
    $("#isotope-container").isotope({
        
    });
    
    // filter items on button click
    $("#isotope-filters").on('click', 'button',function() {
        
        // get filter value
        var filterValue = $(this).attr('data-filter');
        
        // filter technology items
        $("#isotope-container").isotope({
            filter: filterValue
        
        });
        
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
        
    });
});




























