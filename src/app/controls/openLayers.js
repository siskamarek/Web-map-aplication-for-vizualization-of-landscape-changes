import  {layerGroup} from "leaflet"

import {layers} from "../../../layers"


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
            layerBtn.style.color="black";
        };

        activeBaseL=layers[layerId];
        console.log(activeBaseL);
        let baseMap=layers.baseMap;
        console.log(baseMap);
        let merged = layerGroup([baseMap, activeBaseL]);
        console.log(merged);
        button=event.target;
        button.style.color="blue";
        //console.log(map);
        const map=document.getElementById("map");
        merged.addTo(map);
        console.log(map);
    };
};