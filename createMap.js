import {map as leafletMap} from "leaflet";
import {layers} from "./layers"


export function createBasicMap(){
const map =leafletMap("map").setView([48.5, 19.5], 8);
const baseMap=layers.baseMap;
baseMap.addTo(map);
}

