import Controller from '@ember/controller';

export default Controller.extend({
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