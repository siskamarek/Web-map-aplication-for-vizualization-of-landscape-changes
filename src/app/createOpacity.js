
import {getActiveOl, getLayerId} from "./controls/openLayers"

export function createOpacity(){
   const toggleOpacity=document.getElementById("opacity-input");
   const opacityTool=document.getElementById("opacity");
   const opacityRange=document.querySelector("#opacity-tool");
   toggleOpacity.addEventListener("change", toggleOpacityTool);

   
  

   function toggleOpacityTool(e){
        
       let checked = e.target.checked;
       //let activeId= getLayerId();
       if(checked){
           opacityTool.style.display="block";
           const value=opacityRange.value;
            console.log(value);
            getActiveOl().setOpacity(value);
            
            document.getElementById("NONE").addEventListener("click", ()=>{
                opacityTool.style.display="none";
                toggleOpacity.checked=false;
                opacityRange.value=1;
                getActiveOl().setOpacity(1);
            })
            
        }
       else{
           opacityTool.style.display="none";
           opacityRange.value=1;
           
           getActiveOl().setOpacity(1);
           
        };

       opacityTool.addEventListener("change", (e)=>{
           const opacityVal=e.target.value;
           const activeOl=getActiveOl();
        
           activeOl.setOpacity(opacityVal);
       })
   }

}