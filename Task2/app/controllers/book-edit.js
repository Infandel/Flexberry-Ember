import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveBook(book) {
      try {
        this.get('model').setProperties(book)
        await this.get('model').save();

        this.transitionToRoute('book');
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