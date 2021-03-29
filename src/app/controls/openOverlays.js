//open overlay

import {overlays} from "../../../layers"
import {Lmap} from "../../../createMap"


export function openOverlays(){
const chceckboxes=document.getElementsByClassName("overlay");

for(const checkbox of chceckboxes){
    checkbox.addEventListener('change', onOverlayChange);
};

function onOverlayChange(event){
    const checkbox = event.target;
    const layerName = checkbox.value;
    const checked = checkbox.checked;
    if(checked){openOverlay(layerName)}
    else {removeOverlay(layerName)};
}

function openOverlay(layerName){
    Lmap.createPane(layerName);
    Lmap.getPane(layerName).style.zIndex=650;
    Lmap.addLayer(overlays[layerName]);
};

function removeOverlay(layerName){
    Lmap.removeLayer(overlays[layerName]);
};

toggleOverlays();

function toggleOverlays(){
    document.getElementById("toggleOverlays").addEventListener("click", ()=>{
        const overlaysList=document.getElementById("overlays");
        if(overlaysList.hasAttribute("hidden")){
            overlaysList.removeAttribute("hidden");
            return
        }

        overlaysList.setAttribute('hidden', true);
    })
}
}

