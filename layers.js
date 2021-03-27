import {tileLayer} from "leaflet"
import {CRS} from "leaflet"

export const layers = {
//base layers
baseMap: tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=l6LE501kztQbg1HaKhEg",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ),
  //ortofoto (google)
googleMaps: tileLayer("http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"),

ZBGIS: tileLayer("https://zbgisws.skgeodesy.sk/zbgis_wmts_new/service.svc/get?", {
format: "image/png",
transparent: true,
}),

freeMap: tileLayer("https://outdoor.tiles.freemap.sk/{z}/{x}/{y}.jpg"),
  //ortofoto 2017-2019 (SAZP)
ortoUGKK: L.tileLayer.wms(
  "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
  {
    layers: "1,2,3",
    format: "image/png",
    transparent: true,
  }
),
  //ortofoto (mapy.CZ)
mapyCZ: tileLayer("https://mapserver.mapy.cz/bing/{z}-{x}-{y}"),
  //ortofoto 2010 (SAZP)
orto2010: tileLayer.wms("http://tiles.geop.sazp.sk/base/service?",
  {
    layers: "ortofoto_2010",
    crs: CRS.EPSG4326,
    format:"image/png",
    transparent: true,
  }),
  //Basic map
ZM: tileLayer.wms("https://zbgisws.skgeodesy.sk/ZMSR_wms/service.svc/get",
  {
    layers: "1,2,3",
    format: "image/png",
    transparent: true,
    //pane: "ZM",
  }),


//Overlay Layers

IVM: tileLayer.wms("http://tiles.geop.sazp.sk/base/service", {
    layers: "sazp_vojenske_mapovanie_I",
    crs: CRS.EPSG4326,
    format: "image/png",
    transparent: true,
    pane: "IVM",
  }),

IIVM: tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    dpiMode: 7,
    format: 'image/png',
    transparent: true,
    layers: "sazp_vojenske_mapovanie_II",
    crs: CRS.EPSG4326,
    pane: "IIVM"
  }),

IIIVM: tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/hm_III_vm/service.svc/get?",
    {
      layers: "1,2,3",
      format: "image/png",
      transparent: true,
      pane: "IIIVM",
    }
  ),

IIIVMr: tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IIIr",
    crs: CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IIIVMr",
  }),

IVVM: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IV",
    crs: CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IVVM",
  }),

IVVMr: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IVr",
    crs: CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IVVMr",
  }),

};
   

      


