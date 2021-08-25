import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveSpeaker(speaker) {
      try {
        this.get('model').setProperties(speaker)
        await this.get('model').save();

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