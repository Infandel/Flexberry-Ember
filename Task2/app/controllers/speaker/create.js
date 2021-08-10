import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      try {
        await this.get("dataService").createSpeaker(speaker);
        this.get('model').set('name', speaker.name);
        this.get('model').set('surname', speaker.surname);
        this.get('model').set('patronymic', speaker.patronymic)

        this.transitionToRoute('speaker.index');
      }
      catch(e){
        this.send('error', new Error('Connection failed'));
      }
    },
  }
});