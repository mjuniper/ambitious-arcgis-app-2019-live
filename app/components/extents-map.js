import Component from '@ember/component';
import { loadMap } from '../utils/map';

export default Component.extend({
  classNames: ['extents-map'],

  // wait until after the component is added to the DOM before creating the map
  didInsertElement () {
    this._super(...arguments);
    // create a map at this element's DOM node
    loadMap(this.elementId, { basemap: 'gray' })
    .then(view => {
      // hold onto a reference to the map view
      this._view = view;
    });
  },

  // destroy the map before this component is removed from the DOM
  willDestroyElement () {
    if (this._view) {
      this._view.container = null;
      delete this._view;
    }
    this._super(...arguments);
  }
});
