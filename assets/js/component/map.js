System.register(['jquery', 'sweetalert', '../utils/env'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/20.
     */
    'use strict';

    var $, sweetalert, env, CurrPosition, watchPosition;

    _export('default', initGmap);

    function initGmap() {
        if (!google) {
            return false;
        }
        if (env.gmap) {
            return false;
        }
        var $el = {};
        $el.map = $('#map');
        var map = env.gmap = new GMaps({
            el: $el.map.get(0),
            lat: 35.710841,
            lng: 139.735039,
            zoom: 16
        });
        var $map_popinfo = $('<div id=""></div>');
        var $map_xjdd = $('<div id="map-xjdd"></div>');
        var $map_dw = $('<div id="map-dw"></div>');
        var $map_add_btn = $('<div id="map_add_btn"></div>');
        google.maps.event.addListenerOnce(map.map, 'idle', function () {
            $el.map.append($map_xjdd);
            $el.map.append($map_dw);
            $el.map.append($map_popinfo);
            $el.map.append($map_add_btn);
            env.mapReady.resolve();
        });
        env.mapReady.done(function () {
            GMaps.geolocate({
                success: function success(position) {
                    env.nowPosition = position;
                    currposition.setPosition(position);

                    if (watchGps) {
                        watchGps();
                    }
                    watchGps = watchPosition(function (position) {
                        env.nowPosition = position;
                        currposition.setPosition(position);
                    }, function (err) {
                        console.log(err);
                    });
                },
                error: function error(_error) {
                    sweetalert('定位失败!');
                    var position = {
                        timestamp: 1442740446453,
                        coords: {
                            accuracy: 24,
                            altitude: null,
                            altitudeAccuracy: null,
                            heading: null,
                            latitude: 35.710841,
                            longitude: 139.735039,
                            speed: null
                        }
                    };
                    currposition.setPosition(position);
                    console.log('Geolocation failed: ' + _error.message);
                },
                not_supported: function not_supported() {
                    console.log('Your browser does not support geolocation');
                },
                always: function always() {}
            });
        });

        $map_xjdd.on('tap', function () {
            env.router.setRoute('/add_addr');
        });
        $map_add_btn.on('touchstart', function (evt) {
            evt.preventDefault();
        }).on('tap', function (evt) {
            var position = map.getCenter();
            console.log(position);
            map.addMarker({
                lat: position.H,
                lng: position.L,
                title: 'Marker',
                click: function click(e) {
                    alert('You clicked in this marker');
                }
            });
            env.router.setRoute('/modal/select-map/null');
        });
        var currposition = new CurrPosition(map);
        var watchGps = null;
        env.nowPosition = {
            timestamp: 1442740446453,
            coords: {
                accuracy: 24,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                latitude: 35.710841,
                longitude: 139.735039,
                speed: null
            }
        };

        $el.map.on('tap', '#map-dw', function (evt) {
            var position = env.nowPosition;
            map.setZoom(18);
            map.setCenter(position.coords.latitude, position.coords.longitude);

            //map.drawRoute({
            //    origin: [position.coords.latitude, position.coords.longitude],
            //    destination: [27.661044385063104, 117.97987619762262],
            //    travelMode: 'driving',
            //    strokeColor: '#131540',
            //    strokeOpacity: 0.6,
            //    strokeWeight: 6
            //});
        });

        env.mainlayout.on('moveEnd', function () {
            google.maps.event.trigger(env.gmap.map, 'resize');
        });
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_sweetalert) {
            sweetalert = _sweetalert['default'];
        }, function (_utilsEnv) {
            env = _utilsEnv['default'];
        }],
        execute: function () {
            CurrPosition = (function createCurrPosition() {
                function CurrPosition(map) {
                    this.center = null;
                    this.outside = null;
                    this.map = map;
                }

                var p = CurrPosition.prototype;

                p.checkDraw = function () {
                    return this.center && this.outside;
                };

                p.getRadius = function () {
                    console.log(this.map.getZoom());
                    //return 18 / this.map.getZoom() * this.defaultRadius;
                    return Math.pow(2, 20 - this.map.getZoom());
                };

                p.refreshPosition = function (position) {
                    this.center.setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    this.outside.setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    this.outside.setRadius(position.coords.accuracy);
                };

                p.drawPosition = function (position) {
                    var self = this;
                    this.map.on('zoom_changed', function () {
                        self.center.setRadius(self.getRadius());
                    });
                    this.center = this.map.drawCircle({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        radius: self.getRadius(),
                        fillColor: '#0091FF',
                        fillOpacity: 0.8,
                        strokeColor: '#FFFFFF',
                        strokeWeight: 2
                    });
                    this.outside = this.map.drawCircle({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        radius: position.coords.accuracy,
                        fillColor: '#0091FF',
                        fillOpacity: 0.2,
                        strokeColor: '#9DDAFB'
                    });
                };

                p.setPosition = function (position) {
                    this.checkDraw() ? this.refreshPosition(position) : this.drawPosition(position);
                };

                return CurrPosition;
            })();

            watchPosition = function watchPosition(success, error, options) {
                var watchId = navigator.geolocation.watchPosition(success, error, options);

                var clear = function clear() {
                    navigator.geolocation.clearWatch(watchId);
                };
            };
        }
    };
});
//zoomControl: false,
//panControl: false,
//streetViewControl: false,
//mapTypeControl: false,
//overviewMapControl: false

//alert("Done!");

//# sourceMappingURL=map.js.map