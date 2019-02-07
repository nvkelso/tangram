/*
    Hello source-viewers!
    We're glad you're interested in how Tangram can be used to make amazing maps!
    - The Tangram team
*/

(function () {
    var scene_url = 'demos/scene.yaml';

    /*** Map ***/

    // Create Tangram map in the element called 'map'
    this.map = Tangram.tangramLayer('map', {
      scene: scene_url
    });

    /*** Map ***/

    window.addEventListener('load', () => {
      const options = {
        maxZoom: 20,
        zoomSnap: 0,
        keyboard: false,
        center: { lat: 40.70531887544228, lng: -74.00976419448853 },
      };

      this.map.initialize(options);

      window.scene = map.scene; // set by tangramLayer

    });
    window.map = map;
}());
