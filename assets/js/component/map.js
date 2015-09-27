/**
 * Created by wushuyi on 2015/9/20.
 */

window.initGMap = function () {

    var CurrPosition = (function createCurrPosition() {
        function CurrPosition(map) {
            this.center = null;
            this.outside = null;
            this.map = map;
        }

        p = CurrPosition.prototype;

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
                strokeWeight: 2,
            });
            this.outside = this.map.drawCircle({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                radius: position.coords.accuracy,
                fillColor: '#0091FF',
                fillOpacity: 0.2,
                strokeColor: '#9DDAFB',
            });
        };

        p.setPosition = function (position) {
            this.checkDraw() ?
                this.refreshPosition(position) :
                this.drawPosition(position);

            this.map.setCenter(position.coords.latitude, position.coords.longitude);
            this.map.setZoom(18);
        };

        return CurrPosition;
    })();


    (function () {
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
            zoom: 16,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false
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
                click: function (e) {
                    alert('You clicked in this marker');
                }
            });
            env.router.setRoute('/modal/select-map/null');
        });
        var currposition = new CurrPosition(map);
        $el.map.on('tap', '#map-dw', function (evt) {
            GMaps.geolocate({
                success: function (position) {
                    console.log(position);
                    //var position = {
                    //    timestamp: 1442740446453,
                    //    coords: {
                    //        accuracy: 24,
                    //        altitude: null,
                    //        altitudeAccuracy: null,
                    //        heading: null,
                    //        latitude: 31.225098552560077,
                    //        longitude: 121.4441679418087,
                    //        speed: null,
                    //    }
                    //};
                    currposition.setPosition(position);
                },
                error: function (error) {
                    alert('定位失败!');
                    var position = {
                        timestamp: 1442740446453,
                        coords: {
                            accuracy: 24,
                            altitude: null,
                            altitudeAccuracy: null,
                            heading: null,
                            latitude: 35.710841,
                            longitude: 139.735039,
                            speed: null,
                        }
                    };
                    currposition.setPosition(position);
                    console.log('Geolocation failed: ' + error.message);
                },
                not_supported: function () {
                    console.log("Your browser does not support geolocation");
                },
                always: function () {
                    //alert("Done!");
                }
            });
        });
        env.mainlayout.on('moveEnd', function () {
            google.maps.event.trigger(env.gmap.map, 'resize');
        });
    })();
}