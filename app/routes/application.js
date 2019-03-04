import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { debug } from '@ember/debug';
export default Route.extend({
  intl: service(),
  session: service(),
  beforeModel() {
    return this.get('intl').setLocale('en-us');
  },
  actions: {
    signin () {
      this.get('session').open('arcgis-oauth-bearer')
        .then((authorization) => {
          debug('AUTH SUCCESS: ', authorization);
          //transition to some secured route or... whatever is needed
          this.transitionTo('index');
        })
        .catch((err)=>{
          debug('AUTH ERROR: ', err);
        });
    },
    signout () {
      debug(' do sign out');
    }
  }
});
