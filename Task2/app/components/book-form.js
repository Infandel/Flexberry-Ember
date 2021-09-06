import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { later } from '@ember/runloop';
import { get, set, computed } from '@ember/object';

const Validations = buildValidations({
  title: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('length', {
      min: 2,
      max: 100
    })
  ],
  author: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('length', {
      min: 2,
      max: 70
    })    
  ],
  pagesCount: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
  ],
  coverURL: [
    validator('ds-error'),
    // validator('format', {
    //   type: 'url',
      // regex: /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|svg))/i,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.coverURL');
      // }),
    // })
  ],
  descriURL: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('format', {
      type: 'url'
    })
  ],
  tags: [
    validator('ds-error'),
    // validator('presence', {
    //   presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    // }),
    // validator('length', {
    //   min: 2,
    // }),
  ],
});

export default Component.extend(Validations, {
  dataService: service('data'),
  i18n: service(),
  currentUser: service(),
  isFormValid: computed.alias('validations.isValid'),
  showError: false,

  actions: {
    async submitForm(e) {
      try {
        e.preventDefault();
        if (this.get('isFormValid')) {
          this.set('showError', false)
          await this.onsubmit({
            title: this.get('title'),
            author: this.get('author'),
            pagesCount: this.get('pagesCount'),
            descriURL: this.get('descriURL'),
            tags: this.get('tags'),
            user: this.get('currentUser.user'), 
          }, 
          );          
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
    },

    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      title: this.get('book.title'),
      author: this.get('book.author'),
      pagesCount: this.get('book.pagesCount'),
      // coverURL: this.get('book.coverURL'),
      descriURL: this.get('book.descriURL'),
      tags: this.get('book.tags'),
    });
  }
});