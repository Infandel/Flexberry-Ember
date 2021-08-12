import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveClubMeeting(clubMeeting) {
      try {
        let newClubMeeting = this.get('store').createRecord('club-meeting', clubMeeting)
        await newClubMeeting.save();

        this.transitionToRoute('club-meeting.index');
      }
      catch(e){
        this.send('error', e);
      }
    }
  }
});