import { map } from "leaflet";
import { Lmap } from "../../createMap";
import { layers } from "../../layers";
import { activeOL, getActiveBaseL, getActiveOl } from "./controls/openLayers";

export function createTimeline(){
const slider = document.getElementById("slider");
const selector = document.getElementById("selector");
const selectValue = document.getElementById("selectValue");
const toggleTimeline=document.querySelector("#timeLine-chcecbox");
const timeLineTool=document.querySelector("#timeline");
const selectBtn=document.querySelector("#selectBtn");
let activeLayer=layers.googleMaps;
let layerName;
let year=2019;
const yearLabels = [
    {
        year: '2019',
        layerId: "googleMaps",
    },
    {
        year: '2017',
        layerId: "ortoUGKK",
    },
    {
        year: '2010',
        layerId: "orto2010",
    },
    {
        year: '1934',
        layerId: "IIIVMr"
    },
    {
        year: '1931',
        layerId: "IVVMr"
    },
    {
        year: '1897',
        layerId: "IVVM"
    },
    
    {
        year: '1884',
        layerId: "IIIVM"
    },
    {
        year: '1869',
        layerId: "IIVM"
    },
    {
        year: '1787',
        layerId: "IVM"
    },
    {
        year: '1787',
        layerId: "IVM"
    },
    {
        year: '1787',
        layerId: "IVM"
    },
];

toggleTimeline.addEventListener("change", (e)=>{
    const checked=e.target.checked;

    const activeBaseL=getActiveBaseL();
    const activeOL=getActiveOl();

    if(checked){
        timeLineTool.style.display="block";
        if(activeBaseL!=null && activeBaseL !=''){Lmap.removeLayer(activeBaseL)};
        if(activeOL!=null && activeOL !=''){Lmap.removeLayer(activeOL)};
        slider.value=0;
        
        selectValue.innerHTML=year;
        Lmap.createPane("googleMaps");
        Lmap.getPane("googleMaps").style.zIndex=2;
        Lmap.addLayer(activeLayer);
    }
    else{
        timeLineTool.style.display="none";
        Lmap.removeLayer(activeLayer);
        if(activeBaseL)Lmap.addLayer(activeBaseL);
        if(activeOL)Lmap.addLayer(activeOL);
        slider.value=0;

    }
});


slider.oninput = function () {
    year=yearLabels[this.value].year;
    selectValue.innerHTML = year
    selector.style.left = (this.value*10) + '%';

    // Otvor mapu pre rok
    
       
        
        
        /*if(this.value<=2){
            Lmap.removeLayer(activeLayer);

            //getActiveBaseL()=layers[layerName];
            
            layerName=yearLabels[this.value].layerId;
            activeLayer=layers[layerName];
            Lmap.addLayer(activeLayer);

        }
        else{*/
            //getActiveOL()=layers[layerName];
            
            //const previousLayer=yearLabels[(this.value)-1].layerId;
            //Lmap.removeLayer(layers[previousLayer]);
            Lmap.removeLayer(activeLayer);
            layerName=yearLabels[this.value].layerId;
            activeLayer=layers[layerName];
            

            Lmap.createPane(layerName);
            Lmap.getPane(layerName).style.zIndex=649;
            Lmap.addLayer(activeLayer);

       // }
 
}
}

    
    
