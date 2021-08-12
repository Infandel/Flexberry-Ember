import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveReport(report) {
      try {
        this.get('model').setProperties(report)
        await this.get('model').save();

        this.transitionToRoute('report.index');
      }
      catch(e){
        this.send('error', e);
      }
    }
  }
});