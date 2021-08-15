import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),
  store: service(),

  actions: {
    async saveMeeting(e) {
      e.preventDefault();
      this.onsubmit({
        meetingDate: this.get('meetingDate'),
        user: this.get('currentUser.user')
      });
    },
  },

  didReceiveAttrs() {
    this.setProperties({
      meetingDate: this.get('meeting.meetingDate'),
    });
  },
});