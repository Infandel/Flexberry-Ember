import Component from '@ember/component';
import { translationMacro as t } from "ember-i18n";
import { get, computed } from '@ember/object';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: [
    validator('ds-error'),
    validator('presence', true),
  ],
  email: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('ds-error'),
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  passwordConfirmation: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      message: computed['model.{passwordConfirmation,i18n.locale}', function () {
        return '{description} ' + get(this, 'i18n').t('errors.blank');
      }],
    }),
    validator('confirmation', {
      on: 'password',
      message: computed['model.{passwordConfirmation,i18n.locale}', function () {
        return '{description} ' + get(this, 'model.i18n').t('errors.passwordDontMatch');
      }],
      description: computed['model.{passwordConfirmation,i18n.locale}', function () {
        return get(this, 'model.i18n').t('errors.passwordDescription');
      }]
    })
  ]
});

export default Component.extend(Validations, {
  i18n: service(),
  isFormValid: computed.alias('validations.isValid'),
  showError: false,
  actions: {
    async saveUser(e) {
      e.preventDefault();
      if (this.get('isFormValid')) {
        this.set('showError', false)
        this.onsubmit({
          showError: false,
          email: this.email,
          username: this.username,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation
        });      
      }
      else {
        this.set('showError', true),
        later(() => {
          this.set('showError', false)
        }, 2000)
      }
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      email: this.get('user.email'),
      username: this.get('user.username'),
      password: this.get('user.password'),
      passwordConfirmation: this.get('user.passwordConfirmation'),
    });
  }
});