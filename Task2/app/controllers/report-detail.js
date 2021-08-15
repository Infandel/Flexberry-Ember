import Controller from '@ember/controller';

export default Controller.extend({
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