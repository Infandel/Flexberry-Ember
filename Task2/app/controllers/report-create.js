import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveReport(report) {
      try {
        let newReport = this.get('store').createRecord('report', report)
        await newReport.save();

        this.transitionToRoute('meeting');
      }
      catch(e){
        this.send('error', e);
      }
    }
  }
});