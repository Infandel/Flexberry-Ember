import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveMeeting(meeting) {
      try {
        this.get('model').setProperties(meeting)
        await this.get('model').save();

        this.transitionToRoute('meeting');
      }
      catch(e){
        this.send('error', e);
      }
    },
    async deleteMeeting() {
      try {
        let reports = this.model.reports.toArray();

        await this.model.destroyRecord();

        reports.forEach(report => {
          report.unloadRecord();
        });

        this.transitionToRoute('meeting');
      }
      catch (e) {
        this.send('error', e);
      }
    }
  }
});