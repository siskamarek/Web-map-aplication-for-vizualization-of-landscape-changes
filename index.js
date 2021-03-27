import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free";
import "./style.css";
import {createBasicMap} from "./createMap";
import {toggleHidden} from "./src/app/controls/controls"
import {selectLayers} from "./src/app/controls/selectLayers"
import "./src/app/controls/scrolling_menu.css"
import {openBaseL} from "./src/app/controls/openLayers"

//const myMap=map("map", {}).setView([48.5, 19.5], 8);
createBasicMap();

toggleHidden();
selectLayers();
openBaseL();