import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async deleteSpeaker(speaker) {
      try {
        await this.get('dataService').deleteSpeaker(speaker);
        this.transitionToRoute('speaker.index');
      }
      catch (e) {
        this.send('error', new Error('Connection failed'));
      }
    }
  }
});