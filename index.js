import "@fortawesome/fontawesome-free";
import "leaflet/dist/leaflet.css";
import { createBasicMap } from "./createMap";
import { toggleMenu } from "./src/app/controls/controls";
import { openBaseL, openOverlayL } from "./src/app/controls/openLayers";
import { openOverlays } from "./src/app/controls/openOverlays";
import "./src/app/controls/scrolling_menu.css";
import { selectLayers } from "./src/app/controls/selectLayers";
import { createMeasureTool } from "./src/app/createMeasureTool";
import { createOpacity } from "./src/app/createOpacity";
import { createTimeline } from "./src/app/createTimeline";
import { createToolbar } from "./src/app/createToolbar";
import { setViewTool } from "./src/app/handleSetView";
import "./src/app/timeLine-style.css";
import "./style.css";

//import {createToolbar} from "./src/app/createToolbar"
//import {openBaseL} from "./createMap"
//const myMap=map("map", {}).setView([48.5, 19.5], 8);
createBasicMap();

toggleMenu();
selectLayers();
openBaseL();
openOverlayL();
openOverlays();
setViewTool();
createMeasureTool();
createOpacity();
// createToolbar();
createTimeline();
