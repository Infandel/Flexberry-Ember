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
    async deleteMeeting(meeting) {
      try {
        await meeting.destroyRecord();

        this.transitionToRoute('meeting');
      }
      catch (e) {
        this.send('error', e);
      }
    }
  }
});