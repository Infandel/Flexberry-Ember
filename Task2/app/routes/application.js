import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  moment: service(),

  beforeModel() {
    this.get('moment').setTimeZone("Asia/Shanghai");
  },

  actions: {
    error(error, transition) {
      if (transition) {
        transition.abort();
      }
      this.intermediateTransitionTo('error', { error: error.message });
    }
  }
});