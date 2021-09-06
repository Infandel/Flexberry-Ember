import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveBook(book) {
      try {
        let newBook = this.get('store').createRecord('book', book)
        let uploadData = get(this, 'uploadData');
        let data = this.get('dataService')
        await newBook.save()
        .then( function() {
          data.uploadImg(uploadData, newBook.id)
        });       
        // console.log(newBook.id);
        // console.log(uploadData)

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