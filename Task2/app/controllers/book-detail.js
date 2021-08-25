import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async deleteBook(book) {
      try {
        await book.destroyRecord();
        
        this.transitionToRoute('book');
      }
      catch (e) {
        let newLog = this.get('store').createRecord('log', 
          {currentDate: new Date().toString(),
          message: e.message,
          currentURL: window.location.href,
          ipAdress: '',})
        newLog.save();
        this.send('error', e);
      }
    },
  },
});