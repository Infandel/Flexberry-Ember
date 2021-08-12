import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveSpeaker(speaker) {
      try {
        this.get('model').setProperties(speaker)
        await this.get('model').save();

        this.transitionToRoute('speaker.index');
      }
      catch(e){
        this.send('error', e);
      }
    }
  }
});