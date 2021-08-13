import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    saveReport(e){
      e.preventDefault();
      this.onsubmit({
        reportDate: this.get('reportDate'),
        bookScore: this.get('bookScore'),
        presentationURL: this.get('presentationURL'),
        videoURL: this.get('videoURL'),
        review: this.get('review'),
        speaker: this.get('speaker'),
        book: this.get('book'),
        meeting: this.get('meeting'),
      });
    },

    searchSpeaker(query) {
      return this.get('store').query('speaker', { q: query })      
    },
    
    searchBook(query) {
      return this.get('store').query('book', { title_like: query })
    },

    searchMeeting(query) {
      return this.get('store').query('meeting', { meetingDate_like: query })
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      reportDate: this.get('report.reportDate'),
      bookScore: this.get('report.bookScore'),
      presentationURL: this.get('report.presentationURL'),
      videoURL: this.get('report.videoURL'),
      review: this.get('report.review'),
      speaker: this.get('report.speaker'),
      book: this.get('report.book'),
      meeting: this.get('report.meeting'),
    });
  }
});
