import {Meteor} from "meteor/meteor";

import "./main.html";

import "../imports/ui/showMap/showMap.js";
import "../imports/ui/views/showZone.js";
import "../imports/ui/drawingManager/drawingManager.js";


if (Meteor.isClient) {
    Meteor.startup(function () {
    });
}


// function LoadAll(){
//     console.log('loadAll');
//     let array = [];
//     GeoZones.find({}).forEach(function (doc) {
//         array.push(doc.coords)
//     });
//
//     return array;
// }






