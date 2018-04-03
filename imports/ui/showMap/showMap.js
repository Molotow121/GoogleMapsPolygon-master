import "./showMap.html"
import {Template} from "meteor/templating";

GoogleMaps.load({v: '3', key: 'AIzaSyCWuy1zQVFmWkO7EtcWqoGMAickeXQB0E8', libraries: 'drawing'});

Template.googleMapsBody.helpers({
    exampleMapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(50.454, 30.523),
                zoom: 8,
            };
        }
    }
});