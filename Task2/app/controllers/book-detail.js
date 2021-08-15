import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async deleteBook(book) {
      try {
        await book.destroyRecord();
        
        this.transitionToRoute('book');
      }
      catch (e) {
        this.send('error', e);
      }
    },
  },
});