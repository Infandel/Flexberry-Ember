import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  
  actions: {
    async saveBook(book) {
      try {
        this.get('model').setProperties(book)
        let uploadData = this.get('uploadData');
        let data = this.get('dataService')
        let correctedBook = this.get('model')
        await correctedBook.save()
        .then( function() {
          if (uploadData) {
            data.uploadImg(uploadData, correctedBook.id)
          }
        });

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
    },
    
    deleteCurrentCover () {
      this.get('model').setProperties({
        coverURL: ''
      })
      let bookWithoutCover = this.get('model')
      bookWithoutCover.save()
    }
  }
});