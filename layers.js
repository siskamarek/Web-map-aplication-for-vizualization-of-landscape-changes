import {tileLayer} from "leaflet"
import {CRS} from "leaflet"

export const layers = {
//base layers
baseMap: tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=l6LE501kztQbg1HaKhEg",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      pane: "baseMap",
    }
  ),
  //ortofoto (google)
googleMaps: tileLayer("http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  pane: "googleMaps",
}),

ZBGIS: tileLayer("https://zbgisws.skgeodesy.sk/zbgis_wmts_new/service.svc/get?", {
format: "image/png",
transparent: true,
pane: "ZBGIS",
}),

freeMap: tileLayer("https://outdoor.tiles.freemap.sk/{z}/{x}/{y}.jpg" ,{
  pane: "freeMap",
}),
  //ortofoto 2017-2019 (SAZP)
ortoUGKK: tileLayer.wms(
  "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
  {
    layers: "1,2,3",
    format: "image/png",
    transparent: true,
    pane: "ortoUGKK",
  }
),
  //ortofoto (mapy.CZ)
mapyCZ: tileLayer("https://mapserver.mapy.cz/bing/{z}-{x}-{y}",{
  pane: "mapyCZ",
}),
  //ortofoto 2010 (SAZP)
orto2010: tileLayer.wms("http://tiles.geop.sazp.sk/base/service?",
  {
    layers: "ortofoto_2010",
    crs: CRS.EPSG4326,
    format:"image/png",
    transparent: true,
    pane: "orto2010",
  }),
  //Basic map
ZM: tileLayer.wms("https://zbgisws.skgeodesy.sk/ZMSR_wms/service.svc/get",
  {
    layers: "1,2,3",
    format: "image/png",
    transparent: true,
    pane: "ZM",
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

IVVM: tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IV",
    crs: CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IVVM",
  }),

IVVMr: tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IVr",
    crs: CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IVVMr",
  }),

};
   
export const overlays={
  DMR: tileLayer.wms("https://zbgisws.skgeodesy.sk/zbgis_dmr3_wms/service.svc/get",
  {
    layers: "0,1,2",
    format: "image/png",
    transparent: true,
    pane: "DMR",
  }),

  Lidar: tileLayer("https://dmr5.tiles.freemap.sk/{z}/{x}/{y}.png"),

  Nazvoslovie: tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/zbgis_geograficke_nazvoslovie_wms/service.svc/get",
    {
      layers: "0,1,2,3,4,5",
      format: "image/png",
      transparent: true,
      pane: "Nazvoslovie",
    }
  ),

  ParcelyC: tileLayer.wms(
    "https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WmsServer?",
    {
      layers: "2,3,4,5,6,7,8,11,12,13,14,15",
      format: "image/png",
      transparent: true,
      pane:"ParcelyC",
    }
  ),

  ParcelyE: tileLayer.wms(
    "https://kataster.skgeodesy.sk/eskn/services/NR/uo_wms_norm/MapServer/WmsServer?",
    {
      layers: "0,3,4,5",
      format: "image/png",
      transparent: true,
      pane: "ParcelyE",
    }
  ),

  ESRI: tileLayer(
      "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/0",
      {
        layers: "World Hillshade",
        format: "image/png",
        transparent: true,
        pane: "ESRI",
      }
  ),
};

      


