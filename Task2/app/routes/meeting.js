import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { PER_PAGE } from '../controllers/meeting';


export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    speaker: {
      refreshModel: true
    },
    book: {
      refreshModel: true
    }
  },

  model({ search, page, speaker, book }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };

    if (search) {
      // return this.get('store').query('meeting', { meetingDate_like: search });
      query.meetingDate_like = search
    }

    // return this.get('store').findAll('meeting');
    // return this.get('store').query('meeting', query);

    if (speaker) {
      query.speaker = speaker;
    }

    if (book) {
      query.book = book;
    }

    return RSVP.hash({
      speakers: this.get('store').findAll('speaker'),
      books: this.get('store').findAll('book'),
      meetings: this.get('store').query('meeting', query),
    });
  },

  actions: {
    loading() {
      return false;
    }
  }
});