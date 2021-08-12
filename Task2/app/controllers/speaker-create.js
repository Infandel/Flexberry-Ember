import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveSpeaker(speaker) {
      try {
        let newSpeaker = this.get('store').createRecord('speaker', speaker)
        await newSpeaker.save();

        this.transitionToRoute('speaker.index');
      }
      catch(e){
        this.send('error', e);
      }
    }
  }
});
