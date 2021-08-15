import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),

  actions: {
    submitForm(e){
      e.preventDefault();
      
      this.onsubmit({
        id: this.get('speakerId'),
        name: this.get('name'),
        surname: this.get('surname'),
        patronymic: this.get('patronymic'),
        user: this.get('currentUser.user')
      });
    },
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      speakerId: this.get('speaker.id') ? this.get('speaker.id') : undefined,
      name: this.get('speaker.name'),
      surname: this.get('speaker.surname'),
      patronymic: this.get('speaker.patronymic')
    });
  }
});