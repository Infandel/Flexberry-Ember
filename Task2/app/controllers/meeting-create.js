import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveMeeting(meeting) {
      try {
        let newMeeting = this.get('store').createRecord('meeting', meeting)
        await newMeeting.save();

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