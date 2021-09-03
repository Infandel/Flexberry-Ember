import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { later } from '@ember/runloop';
import { get, computed } from '@ember/object';

const Validations = buildValidations({

  bookScore: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //     return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('format', {
      regex: /\b[1-5]\b/,
    })
  ],
  presentationURL: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //     return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('format', {
      type: 'url',
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.url');
      // }),
    })
  ],
  videoURL: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //     return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('format', {
      type: 'url',
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.url');
      // }),
    })
  ],
  review: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('length', {
      min: 2,
      max: 400,
    })  
  ],
  speaker: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
  ],
  book: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //     return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
  ],
});

export default Component.extend(Validations, {
  i18n: service(),
  currentUser: service(),
  store: service(),
  isFormValid: computed.alias('validations.isValid'),
  showError: false,

  actions: {
    saveReport(e){
      e.preventDefault();
      if (this.get('isFormValid')) {
        this.set('showError', false) 
        this.onsubmit({
          reportDate: this.get('meeting.meetingDate'),
          bookScore: this.get('bookScore'),
          presentationURL: this.get('presentationURL'),
          videoURL: this.get('videoURL'),
          review: this.get('review'),
          speaker: this.get('speaker'),
          book: this.get('book'),
          meeting: this.get('meeting'),
          user: this.get('currentUser.user')
        });
      }
      else {
        this.set('showError', true),
        later(() => {
          this.set('showError', false)
        }, 5000)
      }
    },

    searchSpeaker(query) {
      return this.get('store').query('speaker', { q: query })      
    },
    
    searchBook(query) {
      return this.get('store').query('book', { title_like: query })
    },

    // searchMeeting(query) {
    //   return this.get('store').query('meeting', { meetingDate_like: query })
    // }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      reportDate: this.get('report.meeting.meetingDate'),
      bookScore: this.get('report.bookScore'),
      presentationURL: this.get('report.presentationURL'),
      videoURL: this.get('report.videoURL'),
      review: this.get('report.review'),
      speaker: this.get('report.speaker'),
      book: this.get('report.book'),
      meeting: this.get('report.meeting'),
    });
  }
});
