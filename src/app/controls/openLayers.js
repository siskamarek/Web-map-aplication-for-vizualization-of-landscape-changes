import  {layerGroup, map} from "leaflet"
import {layers} from "../../../layers"
import {Lmap} from "../../../createMap"

export function openBaseL(){
   const baseLayers= document.getElementsByClassName("basicLayer");

    for(const baseLayer of baseLayers)
    {
        baseLayer.addEventListener("click", onLayerClick)
    }

    let activeBaseL;
    let button;
    

    function onLayerClick(event){
        const layerId=event.target.id;

        if(activeBaseL!=null && activeBaseL!=''){

            activeBaseL.remove();
            
            button.style.color="black";
        };

        activeBaseL=layers[layerId];
        
        let baseMap=layers.baseMap;
        
        let merged = layerGroup([baseMap, activeBaseL]);
        
        button=event.target;
        button.style.color="blue";
        
        Lmap.addLayer(merged);
                
    };
};

export function openOverlayL(){
    const overlayLayers = document.getElementsByClassName("basicOL");

    for(const overlayLayer of overlayLayers){
        overlayLayer.addEventListener("click", onOLClick)
    }
}
export let activeOL;
let button;
let layerId;
function onOLClick(event){
     layerId = event.target.id;
    const toggleDrag=document.getElementById("toggleDrag");
    const toggleOpacity=document.getElementById("toggleOpacity");


    if(activeOL!=null && activeOL!=''){
        Lmap.removeLayer(activeOL);
        
        if(layerId!="NONE"){button.style.color="black"};
        document.getElementById("NONE").style.color="rgba(197, 82, 82, 0.979)";
    }

    if(layerId!="NONE"){
        activeOL=layers[layerId];

        Lmap.createPane(layerId);
        Lmap.getPane(layerId).style.zIndex=649;
        activeOL.addTo(Lmap);

        button=event.target;
        button.style.color="blue";
        toggleDrag.style.display="block";
        toggleOpacity.style.display="block";

        const opacity = document.querySelector("#opacity-tool").value;
        activeOL.setOpacity(opacity);
        
    }
    else{
        button.style.color="black";
        document.getElementById(layerId).style.color="red";
        toggleDrag.style.display="none";
        
        toggleOpacity.style.display="none";
        
    }
}

export function getActiveOl(){
    if(!activeOL){throw new Error("overlay was not found");}
    return activeOL;
}

export function getLayerId(){
    return layerId;
}