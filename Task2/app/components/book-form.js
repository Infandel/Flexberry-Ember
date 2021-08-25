import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { later } from '@ember/runloop';
import { get, computed } from '@ember/object';

const Validations = buildValidations({
  title: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      }),
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
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      }),
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
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      }),
    }),
    validator('format', {
      regex: /^[0-9]+$/,
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.positive');
      }),
    })
  ],
  coverURL: [
    validator('ds-error'),
    validator('format', {
      type: 'url',
      regex: /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|svg))/i,
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.coverURL');
      }),
    })
  ],
  descriURL: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      }),
    }),
    validator('format', {
      type: 'url'
    })
  ],
  tags: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      }),
    }),
    validator('length', {
      min: 2,
    }),
    validator('format', {
      regex: /^[a-zA-Z0-9,]*$/,
      message: computed('model.{i18n.locale}', function () {
        return get(this, 'model.i18n').t('errors.tags');
      }),
    })
  ],
});

export default Component.extend(Validations, {
  i18n: service(),
  currentUser: service(),
  isFormValid: computed.alias('validations.isValid'),
  showError: false,

  actions: {
    submitForm(e){
      e.preventDefault();
      if (this.get('isFormValid')) {
        this.set('showError', false)   
        this.onsubmit({
          title: this.get('title'),
          author: this.get('author'),
          pagesCount: this.get('pagesCount'),
          coverURL: this.get('coverURL'),
          descriURL: this.get('descriURL'),
          tags: this.get('tags').toString().split(','),
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
    this._super(...arguments);
    this.setProperties({
      title: this.get('book.title'),
      author: this.get('book.author'),
      pagesCount: this.get('book.pagesCount'),
      coverURL: this.get('book.coverURL'),
      descriURL: this.get('book.descriURL'),
      tags: this.get('book.tags'),
    });
  }
});