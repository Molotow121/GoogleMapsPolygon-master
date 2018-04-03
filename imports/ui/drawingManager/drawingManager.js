import "./drawingManager.html";
import {Template} from "meteor/templating";
import {EnterName} from "../../functions/createGeoZone";

Template.drawingBar.onCreated(function () {
    createPolygon();
});

export function createPolygon( coords = null, load = null){

    GoogleMaps.ready('exampleMap', function (map) {
        let marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance,
            animation: google.maps.Animation.DROP,
        });
        if(coords) {
            bermudaTriangle = new google.maps.Polygon({
                paths: coords,
                strokeColor: '#0816ff',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            });
            bermudaTriangle.setMap(map.instance);
        }
        if(load) {
            load.forEach((element) => {
                polygonArray = element;
                bermudaTriangle = new google.maps.Polygon({
                    paths: polygonArray,
                    strokeColor: '#0816ff',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35
                });
                bermudaTriangle.setMap(map.instance);
            });
        }
        if(!coords && !load) {
            let drawingManager = new google.maps.drawing.DrawingManager({
                drawingMode: google.maps.drawing.OverlayType.MARKER,
                drawingControl: true,
                drawingControlOptions: {
                    position: google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: ['marker', 'polygon', 'polyline']
                },
                markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
            });

            drawingManager.setMap(map.instance);

            let polygonArray = [];

            google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
                polygonArray = [];
                for (let i = 0; i < polygon.getPath().getLength(); i++) {
                    let str = polygon.getPath().getAt(i).toUrlValue(6);
                    let strSplit = str.split(',');
                    polygonArray.push({lat: +strSplit[0], lng: +strSplit[1]});
                }
                EnterName(polygonArray);

            });
        }
    });
}
