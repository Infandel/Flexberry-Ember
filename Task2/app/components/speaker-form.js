import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { later } from '@ember/runloop';


const Validations = buildValidations({
  name: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      message: computed('model.{i18n.locale}', function () {
        return '{description} ' + get(this.model, this.model.i18n).t('errors.blank');
      }),
    }),
    validator('length', {
      min: 2,
      max: 40
    })
  ],
  surname: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      message: computed('model.{surname, i18n.locale}', function() {
        return  '{description}';
      }),
    }),
    validator('length', {
      min: 2,
      max: 40
    })    
  ],
  patronymic: [
    validator('ds-error'),
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
          name: this.get('name'),
          surname: this.get('surname'),
          patronymic: this.get('patronymic'),
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
      name: this.get('speaker.name'),
      surname: this.get('speaker.surname'),
      patronymic: this.get('speaker.patronymic')
    });
  }
});