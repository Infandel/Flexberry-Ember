import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    async deleteReport(report) {
      try {
        await report.destroyRecord();
        
        this.transitionToRoute('meeting');
      }
      catch (e) {
        this.send('error', e);
      }
    }
  }
});