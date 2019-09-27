<template>
    <div id="map">

    </div>
</template>

<script>
    export default {
        name: "CatalogMap",
        props: {
            vacancies: Array,
        },
        mounted() {
            // Создаётся объект promise
            let promise = new Promise((resolve, reject) => {
                //getData()
                resolve("result")
            });

            let location = new google.maps.LatLng(51.5180861, -0.1359333);

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
                center: location,
                zoom: 14,
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: stylesMap
            }
            let map = new google.maps.Map(mapCanvas, mapOptions);


            let imageUrl = 'http://dev.greenkey.ru/jobgear-pr/svg/pinmap2.svg';
            let imageUrl_sel = 'http://dev.greenkey.ru/jobgear-pr/svg/pinmap3.svg';
            //let markerImage = new google.maps.MarkerImage(imageUrl, new google.maps.Size(32, 42));

            let markerImage = {
                url: imageUrl,
                size: new google.maps.Size(32, 42),
                labelOrigin: new google.maps.Point(15, 15),
                scale: 2.2
            };

            let markerIcon = {
                path: "M7.573 0C3.497 0 .18 3.293.18 7.342a7.12 7.12 0 0 0 .647 2.996c1.848 4.017 5.391 8.258 6.433 9.461a.413.413 0 0 0 .624 0c1.042-1.203 4.585-5.444 6.434-9.46.429-.933.646-1.941.646-2.997C14.965 3.293 11.65 0 7.573 0zm0 11.155c-2.117 0-3.84-1.71-3.84-3.814 0-2.102 1.723-3.813 3.84-3.813s3.84 1.71 3.84 3.813-1.723 3.814-3.84 3.814z",
                fillColor: '#3B55F7',
                fillOpacity: 1,
                anchor: new google.maps.Point(0, 0),
                strokeWeight: 0,
                scale: 2.2,
                labelOrigin: new google.maps.Point(8, 7)
            };


            promise
                .then(
                    result => {
                        // Add some markers to the map.
                        // Note: The code uses the JavaScript Array.prototype.map() method to
                        // create an array of markers based on a given "locations" array.
                        // The map() method here has nothing to do with the Google Maps API.
                        let markers = this.vacancies.map(function (location, i) {

                            let m = new google.maps.Marker({
                                position: location,
                                label: {
                                    text: "1",
                                    color: '#3a55fa',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                },
                                icon: markerImage
                            });

                            m.addListener('click', function () {
                                this.setIcon({
                                    url: imageUrl_sel,
                                    size: new google.maps.Size(32, 42),
                                    labelOrigin: new google.maps.Point(15, 15),
                                    scale: 2.2
                                })

                            });

                            return m
                        });


                        //set style options for marker clusters (these are the default styles)
                        let mcOptions = {
                            zoomOnClick: false,
                            styles: [{
                                url: imageUrl,
                                scale: 2.2,
                                height: 47,
                                width: 30,
                                anchor: [7, 0],
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
                        };

                        // Add a marker clusterer to manage the markers.
                        let markerCluster = new MarkerClusterer(map, markers, mcOptions);

                        google.maps.event.addListener(markerCluster, 'mouseover', function (c) {
                            console.log(c.clusterIcon_.div_.style.backgroundImage);
                            c.clusterIcon_.div_.style.backgroundImage = "http://dev.greenkey.ru/jobgear-pr/svg/pinmap3.svg"
                        })
                        google.maps.event.addListener(markerCluster, 'mouseout', function (c) {
                            console.log(c.clusterIcon_.div_.style.backgroundImage);
                            c.clusterIcon_.div_.style.backgroundImage = "url('http://dev.greenkey.ru/jobgear-pr/svg/pinmap2.svg')"
                        });

                        google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
                            cluster.clusterIcon_.div_.style.backgroundImage = 'url("http://dev.greenkey.ru/jobgear-pr/svg/pinmap3.svg")'
                            console.log(cluster.clusterIcon_.div_.style);
                            //alert('cluster')
                            //console.log(cluster.markerClusterer_.clusters_)
                            // cluster.clusterIcon_.styles_[0] = {
                            //     url: imageUrl_sel,
                            //     scale: 2.2,
                            //     height: 47,
                            //     width: 30,
                            //     anchor: [7, 0],
                            //     textColor: '#3a55fa',
                            //     textSize: 11,
                            //     fontWeight: 'bold'
                            // }
                            // cluster.updateIcon({
                            //     url: imageUrl_sel,
                            //     size: new google.maps.Size(32, 42),
                            //     labelOrigin: new google.maps.Point(15, 15),
                            //     scale: 2.2
                            // })

                        });

                    },
                    error => alert("Rejected: " + error)
                );

        }
    }
</script>

<style scoped>

</style>
