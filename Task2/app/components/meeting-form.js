import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { later } from '@ember/runloop';
import { get, computed } from '@ember/object';

const Validations = buildValidations({
  meetingDate: [
    validator('ds-error'),
    validator('presence', true),
  ],
});


export default Component.extend(Validations, {
  i18n: service(),
  currentUser: service(),
  store: service(),
  isFormValid: computed.alias('validations.isValid'),
  showError: false,

  actions: {
    async saveMeeting(e) {
      e.preventDefault();
      if (this.get('isFormValid')) {
        this.set('showError', false)   
        this.onsubmit({
          meetingDate: this.get('meetingDate'),
          user: this.get('currentUser.user')
        });
       }
      else {
        this.set('showError', true),
        later(() => {
          this.set('showError', false)
        }, 5000)
      }
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      meetingDate: this.get('meeting.meetingDate'),
    });
  },
});