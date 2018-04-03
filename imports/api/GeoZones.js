import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';



export const GeoZones = new Mongo.Collection('geoZones');

if (Meteor.isServer) {
    Meteor.publish('geoZones', function geoZonesPublication() {
        return GeoZones.find({}).fetch();
    });
}

Meteor.methods({
    'geoZones.insert'(object) {
       GeoZones.insert(object);
        createPolygon();

    },
    'geoZones.remove'(geoZoneId) {
        GeoZones.remove(geoZoneId);
        createPolygon();

    },
    'geoZones.get'() {
        GeoZones.find({}).fetch();
        createPolygon();

    }
});