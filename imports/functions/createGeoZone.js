import {GeoZones} from "../api/GeoZones";
import "../../imports/ui/drawingManager/drawingManager.js";

export function EnterName(polygonArray) {
    let polygonObject = {};
    let polygonName = prompt('Enter location Name');
    if (!polygonName)
        EnterName();
    else
        polygonObject = {name: polygonName, coords: polygonArray}
    saveZone(polygonObject);
}

export function saveZone(polygonObject) {
    GeoZones.insert(polygonObject);
}