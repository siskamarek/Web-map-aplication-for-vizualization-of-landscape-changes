import { Lmap } from "../../createMap";
import {control} from "leaflet"
import "leaflet-measure"
import "leaflet-measure/dist/leaflet-measure.css"
import "leaflet"
export function createMeasureTool() {
    // Measure plugin
    // @see https://github.com/aprilandjan/leaflet.measure
    control
      .measure({
        //  control position
        position: "topleft",
        //  weather to use keyboard control for this plugin
        primaryLengthUnit: 'meters', secondaryLengthUnit: 'kilometers',

        primaryAreaUnit: 'sqmeters', secondaryAreaUnit: undefined,
        activeColor: 'red' ,
        keyboard: true,
        //  shortcut to activate measure
        activeKeyCode: "M".charCodeAt(0),
        //  shortcut to cancel measure, defaults to 'Esc'
        cancelKeyCode: 27,
        //  line color
        lineColor: "red",
        //  line weight
        lineWeight: 2,
        //  line dash
        lineDashArray: "6, 6",
        //  line opacity
        lineOpacity: 1,
        //  distance formatter
        // formatDistance: function (val) {
        //   return Math.round(1000 * val / 1609.344) / 1000 + 'mile';
        // }
      })
      .addTo(Lmap);
  }
  