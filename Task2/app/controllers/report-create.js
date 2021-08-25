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
        let newLog = this.get('store').createRecord('log', 
          {currentDate: new Date().toString(),
          message: e.message,
          currentURL: window.location.href,
          ipAdress: '',})
        newLog.save();
        this.send('error', e);
      }
    }
  }
});