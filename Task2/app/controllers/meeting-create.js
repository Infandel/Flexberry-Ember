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
        this.send('error', e);
      }
    }
  }
});