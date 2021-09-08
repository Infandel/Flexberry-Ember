import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export const PER_PAGE = 3;

export default Controller.extend({  

  session: service(),
  queryParams: ['search', 'page', 'speaker', 'book'],
  search: '',
  page: 1,
  speaker: '',
  book: '',

  pages: computed('model.meetings.meta.total', function() {
    const total = Number(this.get('model.meetings.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),

  selectedBook: computed('book', function() {
    const book = this.get('book');

    return book ? this.get('model.books').findBy('id', book) : null;
  }),

  selectedSpeaker: computed('speaker', function() {
    const speaker = this.get('speaker');

    return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
  }),

  actions: {
    changeSpeaker(speaker) {
      this.set('speaker', speaker ? speaker.get('id') : '');
    },
    
    changeBook(book) {
      this.set('book', book ? book.get('id') : '');
    }
  }
});