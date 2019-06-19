// Google map initialization

function initMap() {

    let location = new google.maps.LatLng(51.5180861, -0.1359333);

    let center = new google.maps.LatLng(51.5180861, -0.1359333);

    let stylesMap = [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "57"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "lightness": "1"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#484848"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "lightness": "0"
                },
                {
                    "gamma": "1.00"
                },
                {
                    "weight": "1"
                }
            ]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "saturation": "-100"
                },
                {
                    "weight": "1"
                },
                {
                    "lightness": "0"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": "1"
                },
                {
                    "lightness": "40"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "30"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#3b55f7"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]

    let mapCanvas = document.getElementById('map');
    let mapOptions = {
        center: center,
        zoom: 14,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: stylesMap
    }
    let map = new google.maps.Map(mapCanvas, mapOptions);


    var imageUrl = 'http://dev.greenkey.ru/jobgear-pr/svg/pinmap.svg';
    //var markerImage = new google.maps.MarkerImage(imageUrl, new google.maps.Size(32, 42));

    var markerImage = {
        url: imageUrl,
        size: new google.maps.Size(32, 42),
        labelOrigin: new google.maps.Point(16, 15)
    };

    var markerIcon = {
        path: "M7.573 0C3.497 0 .18 3.293.18 7.342a7.12 7.12 0 0 0 .647 2.996c1.848 4.017 5.391 8.258 6.433 9.461a.413.413 0 0 0 .624 0c1.042-1.203 4.585-5.444 6.434-9.46.429-.933.646-1.941.646-2.997C14.965 3.293 11.65 0 7.573 0zm0 11.155c-2.117 0-3.84-1.71-3.84-3.814 0-2.102 1.723-3.813 3.84-3.813s3.84 1.71 3.84 3.813-1.723 3.814-3.84 3.814z",
        fillColor: '#3B55F7',
        fillOpacity: 1,
        anchor: new google.maps.Point(0, 0),
        strokeWeight: 0,
        scale: 2.2,
        labelOrigin: new google.maps.Point(8, 7)
    };


    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: {
                text: "1",
                color: '#3a55fa',
                fontSize: '12px',
                fontWeight: 'bold'
            },
            icon: markerIcon
        });
    });


    //set style options for marker clusters (these are the default styles)
    var mcOptions = {
        styles: [{
            url: "http://dev.greenkey.ru/jobgear-pr/images/m1.png",
            height: 53,
            width: 53,
            anchor: [53, 0],
            textColor: '#3a55fa',
            textSize: 11,
            fontWeight: 'bold'
        },
            {
                height: 56,
                url: "http://dev.greenkey.ru/jobgear-pr/images/m2.png",
                width: 56,
                anchor: [56, 0],
                textColor: '#3a55fa',
                textSize: 11,
                fontWeight: 'bold'
            },
            {
                height: 66,
                url: "http://dev.greenkey.ru/jobgear-pr/images/m3.png",
                width: 66,
                anchor: [66, 0],
                textColor: '#3a55fa',
                textSize: 11,
                fontWeight: 'bold'
            },
            {
                height: 78,
                url: "http://dev.greenkey.ru/jobgear-pr/images/m4.png",
                width: 78,
                anchor: [78, 0],
                textColor: '#3a55fa',
                textSize: 11,
                fontWeight: 'bold'
            },
            {
                height: 90,
                url: "http://dev.greenkey.ru/jobgear-pr/images/m5.png",
                width: 90,
                anchor: [90, 0],
                textColor: '#3a55fa',
                textSize: 11,
                fontWeight: 'bold'
            }
        ]
    }

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, mcOptions);
}
