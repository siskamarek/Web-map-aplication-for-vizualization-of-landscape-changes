import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free";
import "./style.css";

import {createBasicMap} from "./createMap";
import {toggleHidden} from "./src/app/controls/controls"
import {selectLayers} from "./src/app/controls/selectLayers"
import "./src/app/controls/scrolling_menu.css"
import {openBaseL, openOverlayL} from "./src/app/controls/openLayers"
import { openOverlays } from "./src/app/controls/openOverlays";
import { setViewTool} from "./src/app/handleSetView";
import { createMeasureTool } from "./src/app/createMeasureTool";
import {createOpacity} from "./src/app/createOpacity"
//import {openBaseL} from "./createMap"
//const myMap=map("map", {}).setView([48.5, 19.5], 8);
createBasicMap();

toggleHidden();
selectLayers();
openBaseL();
openOverlayL();
openOverlays();
setViewTool();
createMeasureTool();
createOpacity();