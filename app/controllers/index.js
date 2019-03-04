import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    doSearch () {
      this.transitionToRoute('items', {
        queryParams: { q: this.q }
      });
    }
  }

});
