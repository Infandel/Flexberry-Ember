import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveBook(book) {
      try {
        let newBook = this.get('store').createRecord('book', book)
        await newBook.save();

        this.transitionToRoute('book.index');
      }
      catch(e){
        this.send('error', e);
      }
    }
  }
});