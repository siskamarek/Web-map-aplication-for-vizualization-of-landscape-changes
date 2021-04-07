import  {layerGroup, map} from "leaflet"
import {layers} from "../../../layers"
import {Lmap} from "../../../createMap"



let activeBaseL;
export function openBaseL(){
    const baseLayers= document.querySelector("#basicLayers");

    baseLayers.addEventListener("click", onBaseLClick);

    let targetItem;
    let targetLayerId; 
    let prevItem;

    const baseMap = layers.baseMap;

    function onBaseLClick(e){
        targetItem = e.target;
        if(targetItem.classList[0]==="selectBaseL"){
            targetLayerId=targetItem.id.replace("2", "");
            openTargetLayer(targetLayerId, e);
        }

        else if(targetItem.classList[0]==="basicLayer"){
            targetLayerId=targetItem.id;
            openTargetLayer(targetLayerId, e)}
        else{return};
    };


    function openTargetLayer(id, event){

        if(activeBaseL){
            Lmap.removeLayer(activeBaseL);
            prevItem.style.color="black";
        };

        activeBaseL = layers[id];
        prevItem = event.target;
        
        prevItem.style.color="blue";

        //let mergedLayers = layerGroup([baseMap, activeBaseL]);

        Lmap.createPane(targetLayerId);
        Lmap.getPane(targetLayerId).style.zIndex=2;
        //let mergedLayers = layerGroup([baseMap, activeBaseL]);
        activeBaseL.addTo(Lmap);
        //Lmap.addLayer(activeBaseL);


        console.log(targetItem.id);
    }


    /*for(const baseLayer of baseLayers)
    {
        baseLayer.addEventListener("click", onLayerClick)
    }

    
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
                
    };*/
};

export function openOverlayL(){
    const overlayLayers = document.querySelector("#basicOLs");
 
    overlayLayers.addEventListener("click", onOLClick);
}

export  let activeOL;
        let item;
        let layerId;

function onOLClick(event){
    
    const toggleDrag=document.getElementById("toggleDrag");
    const toggleOpacity=document.getElementById("toggleOpacity");

if(event.target.classList[0]!=="close"){

    if(activeOL!=null && activeOL!=''){

        
        Lmap.removeLayer(activeOL);
        
        if(layerId!="NONE"){item.style.color="black"};
        document.getElementById("NONE").style.color="rgba(197, 82, 82, 0.979)";
        
    }

    item=event.target;

    if(item.classList[0]==="basicOL"){

    layerId = item.id;

    }

    if(item.classList[0]==="selectOL"){

        layerId=item.id.replace("11", "");

    }
           
        if(layerId!="NONE"){
            if(item.classList[0]!=="close"){
            activeOL=layers[layerId];

            item.style.color="blue";

            
            toggleOpacity.style.display="block";
            toggleDrag.style.display="block";
            
            Lmap.createPane(layerId);
            Lmap.getPane(layerId).style.zIndex=648;
            //activeOL.addTo(Lmap);
            Lmap.addLayer(activeOL);
            const opacity = document.querySelector("#opacity-tool").value;
            activeOL.setOpacity(opacity);
            console.log(layerId);

            };
        }
        else{
            if(item.classList[0]!=="close"){
            item.style.color="black";
            document.getElementById(layerId).style.color="red";
            
            toggleDrag.style.display="none";
            toggleOpacity.style.display="none";
            }
        };
    
    } 
    else {
        return;
    }

};

export function getActiveOl(){
    //if(!activeOL){throw new Error("overlay was not found");}
    return activeOL;
}

export function getLayerId(){
    return layerId;
}

export function getActiveBaseL(){
    return activeBaseL;
}