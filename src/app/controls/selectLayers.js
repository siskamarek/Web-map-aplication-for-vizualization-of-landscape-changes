import { Lmap } from "../../../createMap";
import { layers } from "../../../layers";
import { getActiveBaseL, getActiveOl, getLayerId } from "./openLayers";

export function selectLayers(){

const baseLSelect=document.querySelector(".layers");
const  baseLContainer=document.getElementById("basicLayers");

const  overlaySelect=document.querySelector(".overlay-layers");
const OLContainer=document.querySelector("#basicOLs");

baseLSelect.addEventListener("click", toggleBaseL);
baseLContainer.addEventListener("click", removeBaseL);

overlaySelect.addEventListener("click", toggleOverlayL);
OLContainer.addEventListener("click", removeOL);

function toggleBaseL(e){
    const item = e.target; 
    const layerId = item.id;
    
    const layerName=item.textContent;
    const newElement=document.createElement("div");

    item.style.display="none";

    newElement.innerHTML="<p id='"+layerId+"2' class='selectBaseL'>"+layerName+" <i class='close fas fa-times'></i>";

    console.log(newElement);
    baseLContainer.appendChild(newElement);

};

function removeBaseL(e){
    const item = e.target; 
    console.log(item);
    const element = item.parentElement;
    console.log(element);
    const elementId= element.id;
    console.log(elementId);
    const selectionElementId=elementId.replace('2', '');
    const selectionElement=document.getElementById(selectionElementId);
    //const activeId = getLayerId();
    
    //remove item 
    if(item.classList[0]==="close"){
        element.style.display="none";
        selectionElement.style.display="block";

        /*if(activeId==normalId){
            Lmap.removeLayer(layers[normalId]);

        }*/
        
    }
};

/*function toggleLayer(event){
     layerBtn = event.target;
     layerId = event.target.id;
    const layerName = event.target.textContent;
    const newElement=document.createElement("div");
    newElement.innerHTML="<p class='choosed-Layers' id='"+layerId+"'"+ ">"+layerName+"<i id='"+layerId+"2'"+ "class='close fas fa-times'></i></p>";
    choosedLayersContainer.appendChild(newElement);
    //choosedLayersContainer.innerHTML="<p class='choosed-Layers' id='"+layerId+"1'"+ ">"+layerName+"<i class='close fas fa-times'></i></p>";

    layerBtn.style.display="none";
   
};

function removeItem(e){
    const item=e.target;
    const activeBaseL=getActiveBaseL();
    console.log(item);
    if(item.classList[0]==="close"){
        const element=item.parentElement;
        element.style.display="none";
        layerBtn.style.display="block";
        const targetLayer=item.parentElement.id;
        
        Lmap.removeLayer(layers[targetLayer]);
        item.parentElement.style.color="black";
        if(activeBaseL)Lmap.addLayer(activeBaseL);
    }
    else if(item.classList[0]==="choosed-Layers"){
        const targetLayer=item.id;
        
        if(activeBaseL)Lmap.removeLayer(activeBaseL);
        Lmap.addLayer(layers[targetLayer]);
        item.style.color="blue";
    }
};*/


function toggleOverlayL(e){
    const item = e.target; 
    const overlayId = item.id;
    const selectElement=document.getElementById(overlayId);
    const layerName=selectElement.textContent;
    const newElement=document.createElement("div");

    selectElement.style.display="none";

    newElement.innerHTML="<p id='"+overlayId+"1' class='selectOL'>"+layerName+" <i id='"+overlayId+"2' class='close fas fa-times'></i>";
    OLContainer.appendChild(newElement);

    console.log(overlayId.replace("1", ""));
    console.log(newElement);



    console.log(selectElement);
    
    console.log(overlayId);
};

function removeOL(e){
    const item = e.target; 
    const element = item.parentElement;
    const elementId= element.id;
    const selectionElementId=elementId.replace('1', "");
    const selectionElement=document.getElementById(selectionElementId);
    const normalId = selectionElementId.replace('1', '');
    const activeId = getLayerId();
    
    //remove item 
    if(item.classList[0]==="close"){
        element.style.display="none";
        selectionElement.style.display="block";

        if(activeId==normalId){
            Lmap.removeLayer(layers[normalId]);

        }
        
    }
}







};
