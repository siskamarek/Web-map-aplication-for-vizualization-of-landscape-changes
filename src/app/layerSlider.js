import { map as leafletMap } from "leaflet";
import {Lmap} from "../../createMap"
import "leaflet.sync";
import { getActiveOl, getLayerId } from "./controls/openLayers";
function bindLayerSliderEvents(toggle) {
  let dragging = false;
  const draggable = document.getElementById("draggable");
  const draggableMap = document.getElementById("dragged-map");
  const map = document.getElementById("map");

  const moudownCallback = (e) => {
    if (!dragging) {
      dragging = true;
    }
  };
  const mouseUpCallback = (e) => {
    if (dragging) {
      dragging = false;
    }
  };

  const mouseMoveCallback = (e) => {
    if (dragging) {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      draggable.style.right = `${vw - e.offsetX}px`;
      draggableMap.style.width = `${e.offsetX}px`;
    }
  };

  if (toggle) {
    draggable.addEventListener("mousedown", moudownCallback);
    window.addEventListener("mouseup", mouseUpCallback);
    map.addEventListener("mousemove", mouseMoveCallback);
  } else {
    draggable.removeEventListener("mousedown", moudownCallback);
    window.removeEventListener("mouseup", mouseUpCallback);
    map.removeEventListener("mousemove", mouseMoveCallback);
  }
}

let layerSliderToggled = false;

let draggableMap;

export function toggleLayerSlider(basemap) {
  const draggableMapElement = document.getElementById("dragged-map");
  const draggable = document.getElementById("draggable");
  const activeOverlay = getActiveOl();
  const activeId = getLayerId();
  if (!layerSliderToggled) {
    draggable.style.display = "block";
    draggableMapElement.style.display = "block";
    draggableMap = leafletMap("dragged-map").setView([51.505, -0.09], 13);
    //activeOverlay = getActiveOl();
    //activeId = getLayerId();
    draggableMap.createPane(activeId);
    draggableMap.getPane(activeId).style.zIndex=400;
    basemap.removeLayer(activeOverlay);
    
    activeOverlay.addTo(draggableMap);
    basemap.sync(draggableMap);
    bindLayerSliderEvents(true);
    layerSliderToggled = true;
  } else {
    if (draggableMap) {
      draggableMap.remove();
    }
    bindLayerSliderEvents(false);
    basemap.unsync(draggableMap);
    draggable.style.display = "none";
    draggable.style.right=0;

    draggableMapElement.style.display = "none";
    draggableMapElement.style.width=100+"vw";
    layerSliderToggled = false;
    activeOverlay.addTo(basemap);
  }
}

