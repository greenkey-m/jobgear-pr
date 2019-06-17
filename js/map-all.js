//map
$(function () {

     function initMap() {

         var location = new google.maps.LatLng(51.5180861, -0.1359333);

         var center = new google.maps.LatLng(51.5180861, -0.1359333);

         var stylesMap = [
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

         var mapCanvas = document.getElementById('map');
         var mapOptions = {
             center: center,
             zoom: 14,
             panControl: false,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             styles: stylesMap
         }

         var map = new google.maps.Map(mapCanvas, mapOptions);

         var markerImage = {
             url: 'svg/map.svg',
             size: new google.maps.Size(25, 35)
         };

         var marker = new google.maps.Marker({
             position: location,
             map: map,
             icon: markerImage
         });
     }

     google.maps.event.addDomListener(window, 'load', initMap);

 });