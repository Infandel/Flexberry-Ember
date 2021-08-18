import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveMeeting(meeting) {
      try {
        let meetingModel = this.get('model');    
        meetingModel.setProperties(meeting)
        const reports = meetingModel.get('reports');
        const dateToSet = meetingModel.get('meetingDate');
        let saveReportsPromises = [];

        saveReportsPromises.push(meetingModel.save())
        reports.forEach(report => {
          report.set('reportDate', dateToSet);
          saveReportsPromises.push(report.save());
        });

        await Promise.all(saveReportsPromises);

        // await meetingModel.save();

        this.transitionToRoute('meeting');
      }

      catch(e) {
        this.send('error', e);
      }
    },
    async deleteMeeting(meeting) {
      try {
        let reports = meeting.reports.toArray();

        await meeting.destroyRecord();

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