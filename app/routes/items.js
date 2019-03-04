import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  itemsService: service(),

  // changes to these query parameter will cause this route to
  // update the model by calling the "model()" hook again
  queryParams: {
    q: { refreshModel: true }
  },

  // the model hook is used to fetch any data based on route parameters
  model (params) {
    const q = params.q || '*';
    return this.itemsService.search({ q });
  }
});
