import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    async deleteSpeaker(speaker) {
      try {
        await speaker.destroyRecord();

        this.transitionToRoute('speaker');
      }
      catch (e) {
        this.send('error', e);
      }
    }
  }
});