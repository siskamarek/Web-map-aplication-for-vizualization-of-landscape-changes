import { map as leafletMap } from "leaflet";
import { Lmap } from "../../createMap"
import "leaflet.sync";
import { getActiveOl, getLayerId } from "./controls/openLayers";

function bindLayerSliderEvents(toggle) {
  let dragging = false;
  const draggable = document.getElementById("draggable");
  const draggableMap = document.getElementById("dragged-map");
  const map = document.getElementById("map");

  const moudownCallback = (e) => {
    console.log('moudownCallback', e);
    if (!dragging) {
      dragging = true;
    }
  };
  const mouseUpCallback = (e) => {
    console.log('mouseUpCallback', e);
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

      let currX;
      if ("touchmove" == e.type) {
        currX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      }
      else {
        currX = e.offsetX;
      }

      draggable.style.right = `${vw - currX}px`;
      draggableMap.style.width = `${currX}px`;
    }
  };

  if (toggle) {
    draggable.addEventListener("mousedown", moudownCallback);
    draggable.addEventListener("touchstart", moudownCallback);
    window.addEventListener("mouseup", mouseUpCallback);
    window.addEventListener("touchend", mouseUpCallback);
    map.addEventListener("mousemove", mouseMoveCallback);
    draggable.addEventListener("touchmove", mouseMoveCallback);
  } else {
    draggable.removeEventListener("mousedown", moudownCallback);
    draggable.removeEventListener("touchstart", moudownCallback);
    window.removeEventListener("mouseup", mouseUpCallback);
    window.removeEventListener("touchend", mouseUpCallback);
    map.removeEventListener("mousemove", mouseMoveCallback);
    draggable.removeEventListener("touchmove", mouseMoveCallback);
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
    draggableMap.getPane(activeId).style.zIndex = 400;
    basemap.removeLayer(activeOverlay);

    activeOverlay.addTo(draggableMap);
    basemap.sync(draggableMap);
    bindLayerSliderEvents(true);
    layerSliderToggled = true;
    document.dispatchEvent(new Event('toggleMenu'));
  } else {
    if (draggableMap) {
      draggableMap.remove();
    }
    bindLayerSliderEvents(false);
    basemap.unsync(draggableMap);
    draggable.style.display = "none";
    draggable.style.right = 0;

    draggableMapElement.style.display = "none";
    draggableMapElement.style.width = 100 + "vw";
    layerSliderToggled = false;
    activeOverlay.addTo(basemap);
  }
}

