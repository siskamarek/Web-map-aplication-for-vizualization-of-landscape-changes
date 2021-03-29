import { Lmap } from "../../createMap";
import {marker} from "leaflet"
import "leaflet";
export function setViewTool(){
    let mark;

    document.getElementById("input").addEventListener("submit", handleSetView);
    function handleSetView(event){
        event.preventDefault();
    
        if(mark!=null){
            Lmap.remove(mark);
        };
    
        let lat = document.getElementById("lat").value;
        let long=document.getElementById("long").value;
        //let map=document.getElementById("map");
        mark=marker([lat,long]).addTo(Lmap)
        .bindPopup("Latitude="+lat+"°"+"<br>Longitude="+long+"°")
        .openPopup();
    
        document.getElementById("lat").value="";
        document.getElementById("long").value="";
    
        Lmap.setView([lat, long], 10);
    }
}
