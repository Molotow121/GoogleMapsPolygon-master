import "./showZone.html";
import {Template} from "meteor/templating";
import {createPolygon} from "../../../imports/ui/drawingManager/drawingManager.js";
import {GeoZones} from "../../api/GeoZones";

Template.googleMaps.helpers({
    getZones() {
        return GeoZones.find({}).fetch();
    },
});

Template.googleMaps.events({

    'click .loadAll'(event, instance) {
        /* instance.counter.set(instance.counter.get() + 1);*/
        let array = [];
        GeoZones.find({}).forEach(function (doc) {
            array.push(doc.coords)
        });
        createPolygon(null, array);
    },

    'click .polygonInfo'(event, instance) {
        createPolygon(this.coords, null);
        console.log(this);
    },
});

