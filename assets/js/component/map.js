/**
 * Created by wushuyi on 2015/9/20.
 */


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
    if (env.gmap) {
        return false;
    }
    var $el = {};
    $el.map = $('#map');
    env.mainlayout.viewMove(800);
    var map = env.gmap = new GMaps({
        el: $el.map.get(0),
        lat: 31.216425838137024,
        lng: 121.449533700943,
        zoom: 16,
        //zoomControl: false,
        //zoomControlOpt: {
        //    style: 'SMALL',
        //    position: 'TOP_LEFT'
        //},
        //panControl: false,
        //streetViewControl: false,
        //mapTypeControl: false,
        //overviewMapControl: false
    });
    var $map_xjdd = $('<div id="map-xjdd"></div>');
    var $map_dw = $('<div id="map-dw">定位</div>');

    google.maps.event.addListenerOnce(map.map, 'idle', function () {
        //$el.map.append('<div>test</div>>')


        $el.map.append($map_xjdd);
        $el.map.append($map_dw);
    });


    var $map_ctl = $('<div id="map-ctl"></div>').append($map_xjdd).append($map_dw);
    //map.addControl({
    //    position: 'RIGHT_BOTTOM',
    //    content: $map_ctl.get(0),
    //    disableDefaultStyles: true
    //});
    $el.map.on('tap', '#map-xjdd', function (evt) {
        console.log(evt);
        var $self = $(this);
        var isActive = $self.hasClass('active');
        if (!isActive) {
            $(this).addClass('active');
            return false;
        }
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
    });

    var currposition = new CurrPosition(map);
    $el.map.on('tap', '#map-dw', function (evt) {
        GMaps.geolocate({
            success: function (position) {
                console.log(position);
                var position = {
                    timestamp: 1442740446453,
                    coords: {
                        accuracy: 24,
                        altitude: null,
                        altitudeAccuracy: null,
                        heading: null,
                        latitude: 31.225098552560077,
                        longitude: 121.4441679418087,
                        speed: null,
                    }
                };
                currposition.setPosition(position);
            },
            error: function (error) {
                var position = {
                    timestamp: 1442740446453,
                    coords: {
                        accuracy: 24,
                        altitude: null,
                        altitudeAccuracy: null,
                        heading: null,
                        latitude: 31.225098552560077,
                        longitude: 121.4441679418087,
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
})
();
