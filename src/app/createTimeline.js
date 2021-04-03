import { Lmap } from "../../createMap";
import { layers } from "../../layers";
import { getActiveBaseL, getActiveOl } from "./controls/openLayers";

export function createTimeline(){
const slider = document.getElementById("slider");
const selector = document.getElementById("selector");
const selectValue = document.getElementById("selectValue");
const toggleTimeline=document.querySelector("#timeLine-chcecbox");
const timeLineTool=document.querySelector("#timeline");
const selectBtn=document.querySelector("#selectBtn");
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
        year: '1910',
        layerId: 1
    }
];

toggleTimeline.addEventListener("change", (e)=>{
    const checked=e.target.checked;

    const activeBaseL=getActiveBaseL();
    const activeOL=getActiveOl();

    if(checked){
        timeLineTool.style.display="block";
        if(activeBaseL!=null && activeBaseL !=''){Lmap.removeLayer(activeBaseL)};
        if(activeOL!=null && activeOL !=''){Lmap.removeLayer(activeOL)};
        //slider.value=0;
        selectValue.innerHTML=yearLabels[0].year;
        Lmap.addLayer(layers.googleMaps);
    }
    else{
        timeLineTool.style.display="none";
        Lmap.removeLayer(layers.googleMaps);
        if(activeBaseL)Lmap.addLayer(activeBaseL);
        if(activeOL)Lmap.addLayer(activeOL);

    }
})
/*let dragging=false;
let x ;

selectBtn.addEventListener("mousedown", mouseDownCallback);
timeLineTool.addEventListener("mousemove", mouseMoveCallback);
window.addEventListener("mouseup", mouseUpCallback);

function mouseDownCallback(e){
if(!dragging){
    dragging=true;
    x= e.screenX;
};
};
function mouseMoveCallback(e){
    if(dragging){
        //let actualX=e.screenX-x;
        selector.style.left=`${e.offsetX}px`;
        console.log(e);
    }
};
function mouseUpCallback(e){
    if(dragging){dragging=false};
};*/



slider.oninput = function () {
    selectValue.innerHTML = yearLabels[this.value].year;
    selector.style.left = (this.value*10) + '%';

    // Otvor mapu pre rok
    
        const layerName=yearLabels[this.value].layerId;
        
        Lmap.addLayer(layers[layerName]);
 


        //const layerName = yearLabels[this.value].layerId;
        //setLayer(layerName);
}
}

    
    
