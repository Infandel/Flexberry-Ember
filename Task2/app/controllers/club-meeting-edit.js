import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveClubMeeting(clubMeeting) {
      try {
        this.get('model').setProperties(clubMeeting)
        await this.get('model').save();

        this.transitionToRoute('club-meeting');
      }
      catch(e){
        this.send('error', e);
      }
    },
    async deleteClubMeeting(clubMeeting) {
      try {
        await clubMeeting.destroyRecord();

        this.transitionToRoute('club-meeting');
      }
      catch (e) {
        this.send('error', e);
      }
    }
  }
});