import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveSpeaker(speaker) {
      try {
        let newSpeaker = this.get('store').createRecord('speaker', speaker)
        await newSpeaker.save();

        this.transitionToRoute('speaker');
      }
      catch(e){
        let newLog = this.get('store').createRecord('log', 
          {currentDate: new Date().toString(),
          message: e.message,
          currentURL: window.location.href,
          ipAdress: '',})
        newLog.save();
        this.send('error', e);
      }
    }
  }
});
