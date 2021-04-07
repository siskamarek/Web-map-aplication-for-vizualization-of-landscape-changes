import { map as leafletMap } from "leaflet";
import { layers } from "./layers"
import { control } from "leaflet"
import { toggleLayerSlider } from "./src/app/layerSlider";
import { getActiveOl } from "./src/app/controls/openLayers";
import "leaflet.sync";


export let Lmap = leafletMap("map").setView([48.5, 19.5], 8);


export function createBasicMap() {

    const baseMap = layers.baseMap;
    Lmap.createPane("baseMap");
    Lmap.getPane("baseMap").style.zIndex=1;
    baseMap.addTo(Lmap);
    control.scale().addTo(Lmap);
}

const sliderToggle = document.getElementById("toggleDrag");


sliderToggle.addEventListener("change", () => {
    //console.log(activeOL);
    //const activeOverlay=getActiveOl()
    //const map = document.getElementById("map");
    //map.remove(activeOL);
    //console.log(activeOverlay);
    //Lmap.removeLayer(activeOverlay);
    const overlayMap = getActiveOl();
    //Lmap.removeLayer(overlayMap);
    toggleLayerSlider(Lmap);
});

