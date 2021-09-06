import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { later } from '@ember/runloop';
import { get, computed } from '@ember/object';

const Validations = buildValidations({
  meetingDate: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('i18n.locale', function () {
      //   return '{description} ' + get(this, 'i18n').t('errors.blank');
      // }),
    }),
    validator('format', {
      regex: /[0-3]{0,1}[0-9]\.[0-1]{0,1}[0-9]\.[0-9]{2,4}/,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.date');
      // }),
    })
  ],
});


export default Component.extend(Validations, {
  currentUser: service(),
  store: service(),
  isFormValid: computed.alias('validations.isValid'),
  showError: false,

  actions: {
    async saveMeeting(e) {
      try {
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
      catch(e){
        let newLog = this.get('store').createRecord('log', { 
          currentDate: new Date().toString(),
          message: e.message,
          currentURL: window.location.href,
          ipAdress: '',
        })
        newLog.save();
        this.send('error', e);
      }
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      meetingDate: this.get('meeting.meetingDate'),
    });
  },
});