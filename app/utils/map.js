import esriLoader from 'esri-loader';

// lazy load the ArcGIS API modules and CSS
// then create a new map view at an element
export function loadMap(element, mapOptions) {
  return esriLoader.loadModules(
    ['esri/Map', 'esri/views/MapView'],
    // NOTE: keep this current w/ the latest version of the JSAPI
    { css: 'https://js.arcgis.com/4.10/esri/css/main.css' }
  ).then(([Map, MapView]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }
    // Create the Map
    const map = new Map(mapOptions);
    // show the map at the element
    let view = new MapView({
      map,
      container: element,
      zoom: 2
    });
    // wait for the view to load
    return view.when(() => {
      // prevent zooming with the mouse-wheel
      view.on('mouse-wheel', function(evt){
        evt.stopPropagation();
      });
      // return a reference to the view
      return view;
    });
  });
}
