import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async saveClubMeeting(e) {
      e.preventDefault();
      this.onsubmit({
        meetingDate: this.get('meetingDate'),
      });
    },
  },

  didReceiveAttrs() {
    this.setProperties({
      meetingDate: this.get('club-meeting.meetingDate'),
    });
  },
});