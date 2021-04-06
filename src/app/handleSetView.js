import { Lmap } from "../../createMap";
import L, { marker } from "leaflet";
import "leaflet";

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow
});

export function setViewTool() {
    let mark;

    document.getElementById("input").addEventListener("submit", handleSetView);
    function handleSetView(event) {
        event.preventDefault();

        if (mark != null) {
            Lmap.removeLayer(mark);
        };

        let lat = document.getElementById("lat").value;
        let long = document.getElementById("long").value;
        //let map=document.getElementById("map");
        mark = marker([lat, long]).addTo(Lmap)
            .bindPopup("Latitude = " + lat + "°" + "<br>Longitude = " + long + "°"+"<br><i id='trash-icon' class='fas fa-trash'></i>")
            .openPopup();

        document.getElementById("lat").value = "";
        document.getElementById("long").value = "";

        Lmap.setView([lat, long], 10);

        const trash=document.getElementById("trash-icon"); 
    
        trash.addEventListener("click", ()=>{
            Lmap.removeLayer(mark);
        })
    
    }

    
}


//select overlay layers

