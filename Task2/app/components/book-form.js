import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),

  actions: {
    submitForm(e){
      e.preventDefault();
      this.onsubmit({
        id: this.get('bookId'),
        title: this.get('title'),
        author: this.get('author'),
        pagesCount: this.get('pagesCount'),
        coverURL: this.get('coverURL'),
        descriURL: this.get('descriURL'),
        tags: this.get('tags').toString().split(','),
        user: this.get('currentUser.user')
      });
    }    
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      bookId: this.get('book.id') ? this.get('book.id') : undefined,
      title: this.get('book.title'),
      author: this.get('book.author'),
      pagesCount: this.get('book.pagesCount'),
      coverURL: this.get('book.coverURL'),
      descriURL: this.get('book.descriURL'),
      tags: this.get('book.tags'),
    });
  }
});