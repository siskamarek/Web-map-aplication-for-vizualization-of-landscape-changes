import { Lmap } from "../../../createMap";
import { layers } from "../../../layers";
import { getYearLabels } from "../createTimeline";

let activeBaseL;

export function getActiveBaseL() {
  return activeBaseL;
}

export function openBaseL() {
  const baseLayers = document.querySelector("#basicLayers");
  baseLayers.addEventListener("click", onBaseLClick);
}

let previousTarget;

function onBaseLClick(event) {
  const targetClass = event.target.classList[0];
  if (!["selectBaseL", "basicLayer"].includes(targetClass)) {
    return;
  }

  if (previousTarget) {
    previousTarget.style.color = "black";
  }
  event.target.style.color = "blue";

  let targetLayerId = event.target.id;
  if (targetClass === "selectBaseL") {
    targetLayerId = targetLayerId.replace("2", "");
  }

  addBaseLayerToMap(targetLayerId);
  previousTarget = event.target;

  let yearLabels = getYearLabels();
   for(var i=0, lenght=yearLabels.length; i<lenght; i++){
     if(yearLabels[i].layerId===targetLayerId){
       document.getElementById("slider").value=i;
       console.log(i);
       
     }
     
   }

  
}

export function addBaseLayerToMap(layerId) {
  if (activeBaseL) {
    Lmap.removeLayer(activeBaseL);
  }
  activeBaseL = layers[layerId];
  Lmap.createPane(layerId);
  Lmap.getPane(layerId).style.zIndex = 2;
  activeBaseL.addTo(Lmap);
}

export function openOverlayL() {
  const overlayLayers = document.querySelector("#basicOLs");

  overlayLayers.addEventListener("click", onOLClick);
}

export let activeOL;
let item;
let layerId;

let length;
export let i;
function onOLClick(event) {
  const toggleDrag = document.getElementById("toggleDrag");
  const toggleOpacity = document.getElementById("toggleOpacity");

  if (event.target.classList[0] !== "close") {
    if (activeOL != null && activeOL != "") {
      Lmap.removeLayer(activeOL);

      if (layerId != "NONE") {
        item.style.color = "black";
      }
      document.getElementById("NONE").style.color = "rgba(197, 82, 82, 0.979)";
    }

    item = event.target;

    if (item.classList[0] === "basicOL") {
      layerId = item.id;
    }

    if (item.classList[0] === "selectOL") {
      layerId = item.id.replace("11", "");
    }

    if (layerId != "NONE") {
      if (item.classList[0] !== "close") {
        activeOL = layers[layerId];

        item.style.color = "blue";

        toggleOpacity.style.display = "block";
        toggleDrag.style.display = "block";

        /*Lmap.createPane(layerId);
        Lmap.getPane(layerId).style.zIndex = 648;
        //activeOL.addTo(Lmap);
        Lmap.addLayer(activeOL);*/
        addAvtiveOLToMap(layerId);
        const opacity = document.querySelector("#opacity-tool").value;
        activeOL.setOpacity(opacity);
        console.log(layerId);

        //setTimelinePosition

        let yearLabels = getYearLabels();
   for( i=0 , length=yearLabels.length ; i<length; i++){
     if(yearLabels[i].layerId===layerId){
       document.getElementById("slider").value=i;
       document.getElementById("selectValue").innerHTML=yearLabels[i].year;
       document.getElementById("selector").style.left=i*10+"%";
       console.log(i);
       return i;
     }
     
   }
      }
    } else {
      if (item.classList[0] !== "close") {
        item.style.color = "black";
        document.getElementById(layerId).style.color = "red";

        toggleDrag.style.display = "none";
        toggleOpacity.style.display = "none";
      }
    }
  } else {
    return;
  }
}

export function addAvtiveOLToMap(layerId){

  /*if(activeOL){
    Lmap.removeLayer(activeOL);
  };*/
        //activeOL = layers[layerId];
        Lmap.createPane(layerId);
        Lmap.getPane(layerId).style.zIndex = 648;
        //activeOL.addTo(Lmap);
        Lmap.addLayer(activeOL);
       
        
};

export function getActiveOl() {
  //if(!activeOL){throw new Error("overlay was not found");}
  return activeOL;
}

export function getLayerId() {
  return layerId;
}
