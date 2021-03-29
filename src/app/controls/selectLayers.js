export function selectLayers(){
const  layersSelect=document.getElementsByClassName("layersBtn");
const  choosedLayersContainer=document.getElementById("selectedLayers");
for(const layerSelect of layersSelect){
    layerSelect.addEventListener("click", toggleLayer);
}



function toggleLayer(event){
    const layerBtn = event.target;
    const layerId = event.target.id;
    const layerName = event.target.textContent;
    choosedLayersContainer.innerHTML="<p class='choosed-Layers' id='"+layerId+"1'"+ ">"+layerName+"</p><i class='fas fa-times'></i>";

    layerBtn.style.display="none";
}};
